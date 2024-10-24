/**
 * Verificação de Número Par ou Ímpar
 * @author Erica Viana
 */

// Importar bibliotecas necessárias
const input = require('readline-sync') // Biblioteca readline-sync para ler entrada de dados pelo usuário
const colors = require('colors') // Biblioteca colors para adicionar cores ao texto no console

// Variáveis - O algoritmo
let numero // Declara variáveis para armazenar os números, a operação e o resultado

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Verificação de número par ou ímpar") // Exibe uma mensagem de introdução ao usuário

// Entrada - Atribuir valores as variáveis
numero = Number(input.question("Digite um numero: ")) // Recebe o número do usuário

// Processamento (Fórmula para cálculo do código) e Saída (Resultado do processamento)
if (numero % 2 === 0) {
    console.log(`${numero} é par.`.green) // Exibe o resultado em verde se for par
} else {
    console.log(`${numero} é ímpar.`.red) // Exibe o resultado em vermelho se for ímpar
}

// Comando para instalação da biblioteca readline-sync e colors
// npm install readline-sync colors
