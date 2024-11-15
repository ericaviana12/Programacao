/**
 * Cálculo da Área de um Círculo
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Variável - O algoritmo
let raio; // Variável para armazenar o raio do círculo

// Limpar a tela do console antes de uma nova entrada
console.clear() // Limpa a tela do console

// Exibir o texto
console.log("Cálculo da Área de um Círculo") // Exibe a mensagem do cálculo da área

// Entrada
raio = Number(input.question("Digite o raio do circulo: ")) // Solicita o raio e converte para número

// Processamento
let area = Math.PI * Math.pow(raio, 2) // Calcula a área do círculo (π * r²)

// Saída
console.log(`A área do círculo com raio ${raio} é ${area.toFixed(2)}`) // Exibe a área com duas casas decimais

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
