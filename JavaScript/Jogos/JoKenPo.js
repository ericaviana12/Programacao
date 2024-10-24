/**
 * Jogo Pedra, Papel ou Tesoura (JoKenPo)
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Entrada - Solicitar escolha do jogador
let jogador = Number(input.question("Digite a opção desejada entre 1.Pedra, 2.Papel ou 3.Tesoura: ")) // Solicita ao usuário a opção

// Verificar se a escolha é válida
if (jogador !== 1 && jogador !== 2 && jogador !== 3) {
    console.log("Opção inválida. Escolha entre 1.Pedra, 2.Papel ou 3.Tesoura.") // Exibe mensagem de erro caso a opção não seja válida
} else {
    // Processamento - Gerar escolha aleatória para o computador
    let computador = Math.floor(Math.random() * 3 + 1) // Gera um número aleatório entre 1 e 3

    // Saída - Mostrar as escolhas do jogador
    if (jogador === 1) {
        console.log("Jogador escolheu: Pedra")
    } else if (jogador === 2) {
        console.log("Jogador escolheu: Papel")
    } else {
        console.log("Jogador escolheu: Tesoura")
    }

    // Saída - Mostrar as escolhas do computador
    if (computador === 1) {
        console.log("Computador escolheu: Pedra")
    } else if (computador === 2) {
        console.log("Computador escolheu: Papel")
    } else {
        console.log("Computador escolheu: Tesoura")
    }

    // Processamento - Verificar quem ganhou
    if (jogador === computador) {
        console.log("Deu empate") // Caso as escolhas sejam iguais
    } else if (
        (jogador === 1 && computador === 3) || // Pedra vence Tesoura
        (jogador === 2 && computador === 1) || // Papel vence Pedra
        (jogador === 3 && computador === 2)    // Tesoura vence Papel
    ) {
        console.log("Jogador venceu") // Jogador vence
    } else {
        console.log("Computador venceu") // Computador vence
    }
}

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
