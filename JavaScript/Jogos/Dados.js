/**
 * Jogo de Dados
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Limpar a tela do console antes de uma nova entrada
console.clear() // Limpa a tela do console

// Entrada - Solicitar número de dados ao jogador
let numeroDeDados = input.questionInt("Quantos dados voce quer jogar? ") // Solicita ao usuário o número de dados

// Verificar se a quantidade de dados é válida
if (numeroDeDados <= 0) {
    console.log("Por favor, escolha um número válido de dados maior que zero.") // Mensagem de erro se o número de dados for inválido
} else {
    let total = 0 // Armazena o total dos valores dos dados

    // Processamento - Jogo
    for (let i = 0; i < numeroDeDados; i++) { // Loop para jogar os dados
        let resultado = Math.floor(Math.random() * 6) + 1 // Gera um número aleatório entre 1 e 6
        console.log("Resultado do dado " + (i + 1) + ": " + resultado) // Exibe o resultado do dado
        total = total + resultado // Adiciona o resultado ao total
    }

    // Saída - Exibir o total dos dados
    console.log("Total dos dados: " + total) // Exibe o total final dos dados jogados
}

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
