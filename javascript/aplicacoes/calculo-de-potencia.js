/**
 * Cálculo de Potência (base^expoente)
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync')

// Variáveis - O algoritmo
let base, expoente

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Cálculo de Potência (base^expoente)")

// Entrada
base = Number(input.question("Digite a base: "))
expoente = Number(input.question("Digite o expoente: "))

// Processamento
let potencia = Math.pow(base, expoente) // Calcula a potência usando a função Math.pow()

// Saída
console.log(`${base} elevado a ${expoente} é igual a ${potencia}`)

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
