/**
 * Verificação de número primo
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Variável - O algoritmo
let numero // Variável para armazenar o número inserido

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Verificação de número primo")

// Entrada
numero = Number(input.question("Digite um numero: ")) // Solicita ao usuário o número e converte para número

// Processamento
let ehPrimo = true
if (numero < 2) {
    ehPrimo = false // Números menores que 2 não são primos
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false // Se o número for divisível por qualquer valor além de 1 e ele mesmo, não é primo
            break
        }
    }
}

// Saída
console.log(`O número ${numero} ${ehPrimo ? 'é primo' : 'não é primo'}`) // Exibe se o número é primo ou não

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
