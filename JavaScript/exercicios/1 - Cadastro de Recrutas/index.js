const firstName = prompt("Primeiro nome: ")
const surname = prompt("Sobrenome: ")
const studyField = prompt("Campo de estudo: ")
const birthYear = prompt("Ano de nascimento: ")

const today = new Date()
const currentYear = today.getFullYear()

const text = `
Nome completo: ${firstName} ${surname}.
Campo de Estudo: ${studyField}
Idade: ${currentYear - birthYear}
`
alert(text)
