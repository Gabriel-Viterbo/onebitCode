const veiculo1 = prompt("Nome do Veículo 1: ")
const velocidade1 = parseFloat(prompt("Velocidade 1: "))
const veiculo2 = prompt("Nome do Veículo 2: ")
const velocidade2 = parseFloat(prompt("Velocidade 2: "))

let fastest = veiculo1

if (velocidade2 > velocidade1) {
  fastest = veiculo2
}

if (velocidade1 === velocidade2) {
  fastest = "As velocidades são iguais"
}

alert(`Resultado: ${fastest}`)
