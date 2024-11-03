/**
 * Cálculo de Área de um Retângulo
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync')

// Variáveis - O algoritmo
let base, altura, area

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Cálculo de Área de um Retângulo")

// Entrada
base = Number(input.question("Digite o valor da base do retangulo: "))
altura = Number(input.question("Digite o valor da altura do retangulo: "))

// Processamento
area = base * altura

// Saída
console.log(`A área do retângulo é ${area}`)

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
