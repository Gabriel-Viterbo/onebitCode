'use strict';

const models = require('../../cross-cutting/database');
const { AmazonS3Error, BaseError, DatabaseError } = require('../../cross-cutting/errors');
const config = require('../../../config');
const enums = require('../../../enums');
const { encodeUUID } = require('../../cross-cutting/utils');
const aws = require('../../cross-cutting/aws');
const { createS3Url } = require('../../cross-cutting/aws/s3');

const {
  s3: {
    GetObjectCommand,
    requestPresigner: { getSignedUrl },
  },
} = aws;

const getRecyclerInfo = async (accountId) => {
  let recyclerModel;
  try {
    recyclerModel = await models.account.findOne({
      attributes: ['id', 'accountTypeId'],
      where: { id: accountId },
      required: true,
      include: [
        {
          model: models.juridical,
          attributes: [
            'tradeName',
            'legalName',
            'cnpj',
            'inscricaoEstadual',
            'inscricaoMunicipal',
            'website',
            'contactEmail',
            'description',
            'country',
            'logo',
            'foundedAt',
          ],
          include: [
            {
              model: models.juridicalAddress,
              as: 'addresses',
              attributes: [
                'id',
                'addressTypeId',
                'streetName',
                'number',
                'postalCode',
                'complement',
                'neighborhood',
                'stateAbbreviation',
                'city',
                'country',
              ],
            },
            {
              model: models.juridicalPhone,
              as: 'phones',
              attributes: ['number', 'isWhatsapp', 'phoneTypeId'],
            },
            {
              model: models.contact,
              as: 'technicalManager',
              required: false,
            },
          ],
        },
      ],
    });
  } catch (err) {
    throw new DatabaseError(err);
  }

  if (!recyclerModel) {
    throw new BaseError('Unable to find a recycler by tenant.');
  }

  const { signature } = recyclerModel.get('technicalManager');

  let signatureUrl = null;

  if (signature) {
    const filename = encodeURI(signature);

    const getObjectCommand = new GetObjectCommand({
      Bucket: config.get(enums.CONFIG_KEYS.AWS.S3.BUCKET),
      Key: signature,
      ResponseContentDisposition: `attachment; filename=${filename}`,
    });

    try {
      signatureUrl = await getSignedUrl(aws.s3.client, getObjectCommand, { expiresIn: 60 });
    } catch (err) {
      throw new AmazonS3Error(err);
    }
  }

  const formattedRecycler = recyclerModel.get({ plain: true });
  formattedRecycler.id = encodeUUID(formattedRecycler.id);

  if (formattedRecycler.logo) {
    formattedRecycler.logo = createS3Url(formattedRecycler.logo);
  }

  if (formattedRecycler.addresses) {
    formattedRecycler.addresses = formattedRecycler.addresses.map((address) => {
      const addressObject = { ...address.get({ plain: true }) };
      addressObject.id = encodeUUID(addressObject.id);
      return addressObject;
    });
  }

  if (formattedRecycler.technicalManager) {
    const technicalManager = {
      ...formattedRecycler.technicalManager.get({ plain: true }),
    };
    technicalManager.id = encodeUUID(technicalManager.id);
    technicalManager.juridicalAccountId = encodeUUID(technicalManager.juridicalAccountId);
    technicalManager.signature = signatureUrl;
    formattedRecycler.technicalManager = technicalManager;
  }
  return formattedRecycler;
};

module.exports = getRecyclerInfo;
