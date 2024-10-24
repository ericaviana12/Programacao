/**
 * Cálculo de IMC
 * @author Erica Viana
 */

// Importar bibliotecas necessárias
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário
const colors = require('colors') // Biblioteca colors para adicionar cores ao texto no console

// Variáveis - O algoritmo
let peso, altura, imc = null // Declara variáveis para armazenar o peso, a altura e o IMC

// Limpar a tela do console antes de uma nova entrada
console.clear() // Limpa a tela

// Exibir o texto entre "" (aspas)
console.log("Cálculo do IMC") // Exibe o título do cálculo

// Entrada - Atribuir valores às variáveis
peso = Number(input.question("Digite o seu peso (em kg): ")) // Solicita ao usuário o peso e converte para número
altura = Number(input.question("Digite a sua altura (em metros): ")) // Solicita ao usuário a altura e converte para número

// Processamento - Fórmula para cálculo do IMC
imc = peso / Math.pow(altura, 2) // Fórmula do IMC: IMC = peso/altura²

// Saída - Resultado do processamento
console.log(`Seu IMC é: ${imc.toFixed(2)}`) // Exibe o IMC formatado em azul

// Classificação do IMC
if (imc < 18.5) {
  console.log("Abaixo do peso".yellow) // Exibe a classificação em amarelo
} else if (imc < 25) {
  console.log("Peso normal".green) // Exibe a classificação em verde
} else if (imc < 30) {
  console.log("Sobrepeso".blue) // Exibe a classificação em laranja
} else if (imc < 35) {
  console.log("Obesidade grau 1".magenta) // Exibe a classificação em rosa
} else if (imc < 40) {
  console.log("Obesidade grau 2".red) // Exibe a classificação em vermelho
} else {
  console.log("Obesidade grau 3 (mórbida)".red.bold) // Exibe a classificação em vermelho e negrito
}

// Comando para instalação da biblioteca readline-sync e colors
// npm install readline-sync colors
