/**
 * Conversor de Hexadecimal para Binário e vice-versa
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync')
const colors = require('colors')

// Funções
function hexadecimalParaBinario(hexadecimal) {
    return parseInt(hexadecimal, 16).toString(2)
}

function binarioParaHexadecimal(binario) {
    return parseInt(binario, 2).toString(16)
}

// Variáveis
let escolha, hexadecimal, binario

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Conversor de Hexadecimal para Binário e vice-versa")

// Entrada
escolha = input.question("Escolha '1' para Hexadecimal -> Binario ou '2' para Binario -> Hexadecimal: ")

// Processamento
if (escolha === '1') {
    hexadecimal = input.question("Digite o numero hexadecimal: ")
    binario = hexadecimalParaBinario(hexadecimal)
    console.log(`Hexadecimal convertido para binário: ${binario}`.yellow)
} else if (escolha === '2') {
    binario = input.question("Digite o codigo binario (sem espacos): ")
    hexadecimal = binarioParaHexadecimal(binario)
    console.log(`Binário convertido para hexadecimal: ${hexadecimal}`.cyan)
} else {
    console.log("Opção inválida!".red)
}

// Comando para instalação das bibliotecas:
// npm install readline-sync colors
