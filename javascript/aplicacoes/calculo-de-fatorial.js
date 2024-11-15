/**
 * Cálculo de Fatorial
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Variável - O algoritmo
let numero

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Cálculo de Fatorial")

// Entrada
numero = Number(input.question("Digite um numero para calcular o fatorial: "))

// Processamento
let fatorial = 1
for (let i = 2; i <= numero; i++) {
    fatorial *= i // Multiplica os números de 1 até o valor inserido
}

// Saída
console.log(`O fatorial de ${numero} é ${fatorial}`) // Exibe o fatorial

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
