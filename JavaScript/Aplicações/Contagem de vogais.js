/**
 * Contagem de Vogais em uma Frase
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync')

// Variável - O algoritmo
let frase

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Contagem de Vogais em uma Frase")

// Entrada
frase = input.question("Digite uma frase: ").toLowerCase() // Solicita a frase do usuário e transforma em minúsculas

// Processamento
let contagemVogais = (frase.match(/[aeiou]/g) || []).length // Conta as vogais (a, e, i, o, u) na frase

// Saída
console.log(`A frase contém ${contagemVogais} vogais`)

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
