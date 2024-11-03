/**
 * Contagem de Consoantes em uma Frase
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync')

// Variável - O algoritmo
let frase

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Contagem de Consoantes em uma Frase")

// Entrada
frase = input.question("Digite uma frase: ").toLowerCase() // Solicita a frase do usuário e transforma em minúsculas

// Processamento
let contagemConsoantes = (frase.match(/[bcdfghjklmnpqrstvwxyz]/g) || []).length // Conta as consoantes na frase

// Saída
console.log(`A frase contém ${contagemConsoantes} consoantes`)

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
