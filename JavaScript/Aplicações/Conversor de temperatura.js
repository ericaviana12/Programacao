/**
 * Conversor de Temperatura (Celsius para Fahrenheit e vice-versa)
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Variáveis - O algoritmo
let temperatura, unidade // Variáveis para armazenar a temperatura e a unidade

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Conversor de Temperatura (Celsius para Fahrenheit e vice-versa)")

// Entrada - Atribuir valores as variáveis
temperatura = Number(input.question("Digite a temperatura: ")) // Solicita a temperatura e converte para número
unidade = input.question("Digite a unidade (C para Celsius, F para Fahrenheit): ").toUpperCase() // Solicita a unidade de temperatura

// Processamento (Fórmula para cálculo do código) e Saída (Resultado do processamento)
let resultado
if (unidade === 'C') {
    resultado = (temperatura * 9/5) + 32 // Converte de Celsius para Fahrenheit
    console.log(`A temperatura ${temperatura}°C em Fahrenheit é ${resultado}°F`)
} else if (unidade === 'F') {
    resultado = (temperatura - 32) * 5/9 // Converte de Fahrenheit para Celsius
    console.log(`A temperatura ${temperatura}°F em Celsius é ${resultado}°C`)
} else {
    console.log('Unidade inválida') // Exibe erro se a unidade for inválida
}

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
