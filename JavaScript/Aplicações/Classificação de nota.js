/**
 * Classificação de Nota (A a F)
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Variáveis - O algoritmo
let nota // Variável para armazenar a nota inserida

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Classificação de Nota")

// Entrada - Atribuir valores as variáveis
nota = Number(input.question("Digite sua nota (0 a 100): ")) // Solicita ao usuário a nota e converte para número

// Processamento - Fórmula para cálculo do código
let conceito
if (nota >= 90) {
    conceito = 'A'
} else if (nota >= 80) {
    conceito = 'B'
} else if (nota >= 70) {
    conceito = 'C'
} else if (nota >= 60) {
    conceito = 'D'
} else if (nota >= 50) {
    conceito = 'E'
} else {
    conceito = 'F'
}

// Saída - Resultado do processamento
console.log(`Sua nota é ${nota} e o conceito é ${conceito}`) // Exibe o conceito baseado na nota

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
