import { inline as i } from './inline.js';
import defaultInline from './inline.js';
import e, { group } from './non-inline.js';

i();
defaultInline();

group();
e();
