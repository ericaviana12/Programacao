/**
 * Conversor de Número Decimal para Binário
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync')

// Variável - O algoritmo
let numeroDecimal

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Conversão de Número Decimal para Binário")

// Entrada
numeroDecimal = Number(input.question("Digite um numero decimal: "))

// Processamento
let numeroBinario = numeroDecimal.toString(2) // Converte o número decimal para binário usando o método toString(2)

// Saída
console.log(`O número decimal ${numeroDecimal} em binário é ${numeroBinario}`)

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
