/**
 * Verificação de Ano Bissexto
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Variável - O algoritmo
let ano // Variável para armazenar o ano inserido

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Verificação de Ano Bissexto")

// Entrada - Atribuir valores as variáveis
ano = Number(input.question("Digite um ano: ")) // Solicita ao usuário um ano e converte para número

// Processamento - Fórmula para cálculo do código
let ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0) // Verifica se o ano é bissexto

// Saída - Resultado do processamento
console.log(`O ano ${ano} ${ehBissexto ? 'é bissexto' : 'não é bissexto'}`) // Exibe se o ano é bissexto ou não com uso de operador ternário, que substitui o "if-else" para situações de resolução simples

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
