/**
 * Verificação de Maioridade
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Variáveis - O algoritmo
let idade // Variável para armazenar a idade inserida

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Verificação de Maioridade")

// Entrada - Atribuir valores as variáveis
idade = Number(input.question("Digite sua idade: ")) // Solicita ao usuário a idade e converte para número

// Processamento - Fórmula para cálculo do código
let status = (idade > 17) ? 'Maior de idade' : 'Menor de idade' // Verifica se a pessoa é maior ou menor de idade com uso de operador ternário, que substitui o "if-else" para situações de resolução simples

// Saída - Resultado do processamento
console.log(`Você é ${status}`) // Exibe o resultado

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
