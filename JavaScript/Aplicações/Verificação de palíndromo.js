/**
 * Verificação de Palíndromo
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync')

// Variável - O algoritmo
let frase

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Verificação de Palíndromo")

// Entrada
frase = input.question("Digite uma frase: ").toLowerCase().replace(/\s+/g, '') // Solicita a frase do usuário, transforma em minúsculas e remove espaços

// Processamento
let ehPalindromo = frase === frase.split('').reverse().join('') // Verifica se a frase é igual ao seu reverso

// Saída
console.log(`A frase ${ehPalindromo ? 'é um palíndromo' : 'não é um palíndromo'}`) // Exibe se a frase é ou não um palíndromo (igual de trás pra frente)

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
