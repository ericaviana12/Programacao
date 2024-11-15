/**
 * Calculadora de média de notas
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Variáveis - O algoritmo
let nota1, nota2, nota3, media // Variáveis para armazenar as notas e a média

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Calculadora de média de notas")

// Entrada
nota1 = Number(input.question("Digite a primeira nota: ")) // Solicita a primeira nota
nota2 = Number(input.question("Digite a segunda nota: ")) // Solicita a segunda nota
nota3 = Number(input.question("Digite a terceira nota: ")) // Solicita a terceira nota

// Processamento
media = (nota1 + nota2 + nota3) / 3 // Calcula a média

// Saída
console.log(`A média das notas é ${media.toFixed(2)}`) // Exibe a média com duas casas decimais

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
