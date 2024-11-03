/**
 * Cálculo de Média Ponderada
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync')

// Variáveis - O algoritmo
let nota1, nota2, peso1, peso2, mediaPonderada

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Cálculo de Média Ponderada")

// Entrada
nota1 = Number(input.question("Digite a primeira nota: "))
peso1 = Number(input.question("Digite o peso da primeira nota: "))
nota2 = Number(input.question("Digite a segunda nota: "))
peso2 = Number(input.question("Digite o peso da segunda nota: "))

// Processamento
mediaPonderada = ((nota1 * peso1) + (nota2 * peso2)) / (peso1 + peso2)

// Saída
console.log(`A média ponderada das notas é ${mediaPonderada.toFixed(2)}`)

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
