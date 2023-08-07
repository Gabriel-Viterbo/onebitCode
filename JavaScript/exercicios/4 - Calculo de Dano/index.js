const personagem1 = {}
personagem1.nome = prompt("Nome do Personagem: ")
personagem1.dano = parseFloat(prompt("Dano do Personagem: "))

const personagem2 = {}
personagem2.nome = prompt("Nome do Personagem: ")
personagem2.vida = parseFloat(prompt("Pontos de vida: "))
personagem2.defesa = parseFloat(prompt("Defesa do Personagem: "))
personagem2.hasShield = confirm("O personagem possui escudo?")

let damage = 0

if (personagem1.dano > personagem2.defesa) {
  const rawDamage = personagem1.dano - personagem2.defesa
  damage = rawDamage
  if (personagem2.hasShield) {
    damage = rawDamage / 2
  }
}

alert(`
|=======================|
          Nome: ${personagem1.nome}
          Dano: ${personagem1.dano}
|=======================|

                      X

|=======================|
          Nome: ${personagem2.nome}
          Vida: ${personagem2.vida}
          Defesa: ${personagem2.defesa}
          Escudo: ${personagem2.hasShield ? "Sim" : "Não"}
|=======================|

                      =

|=======================|
          Nome: ${personagem2.nome}
          Vida Atual: ${personagem2.vida - damage}
|=======================|
`)
