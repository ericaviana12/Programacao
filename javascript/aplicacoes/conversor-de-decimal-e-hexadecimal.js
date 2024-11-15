/**
 * Conversor de Decimal para Hexadecimal e vice-versa
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync')
const colors = require('colors')

// Funções
function decimalParaHexadecimal(decimal) {
    return decimal.toString(16)
}

function hexadecimalParaDecimal(hexadecimal) {
    return parseInt(hexadecimal, 16)
}

// Variáveis
let escolha, decimal, hexadecimal

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Conversor de Decimal para Hexadecimal e vice-versa")

// Entrada
escolha = input.question("Escolha '1' para Decimal -> Hexadecimal ou '2' para Hexadecimal -> Decimal: ")

if (escolha === '1') {
    decimal = Number(input.question("Digite o numero decimal: "))
    hexadecimal = decimalParaHexadecimal(decimal)
    console.log(`Decimal convertido para hexadecimal: ${hexadecimal}`.yellow)
} else if (escolha === '2') {
    hexadecimal = input.question("Digite o numero hexadecimal: ")
    decimal = hexadecimalParaDecimal(hexadecimal)
    console.log(`Hexadecimal convertido para decimal: ${decimal}`.cyan)
} else {
    console.log("Opção inválida!".red)
}

// Comando para instalação das bibliotecas:
// npm install readline-sync colors
