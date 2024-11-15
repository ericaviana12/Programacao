/**
 * Jogo da velha
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Inicializa o tabuleiro como 9 espaços em branco
let tabuleiro0 = " " // Posição 0
let tabuleiro1 = " " // Posição 1
let tabuleiro2 = " " // Posição 2
let tabuleiro3 = " " // Posição 3
let tabuleiro4 = " " // Posição 4
let tabuleiro5 = " " // Posição 5
let tabuleiro6 = " " // Posição 6
let tabuleiro7 = " " // Posição 7
let tabuleiro8 = " " // Posição 8

// Função para imprimir o tabuleiro
function imprimirTabuleiro() { // Define a função que imprime o tabuleiro
    console.clear() // Limpa a tela do console
    console.log("|" + tabuleiro0 + "|" + tabuleiro1 + "|" + tabuleiro2 + "|") // Imprime a primeira linha do tabuleiro
    console.log("|" + tabuleiro3 + "|" + tabuleiro4 + "|" + tabuleiro5 + "|") // Imprime a segunda linha do tabuleiro
    console.log("|" + tabuleiro6 + "|" + tabuleiro7 + "|" + tabuleiro8 + "|") // Imprime a terceira linha do tabuleiro
}

// Função para verificar se há um vencedor
function verificarVencedor() { // Define a função para verificar se há um vencedor
    // Combinações de vitória
    if (tabuleiro0 === tabuleiro1 && tabuleiro1 === tabuleiro2 && tabuleiro0 !== " ") { // Verifica linha 1
        return tabuleiro0 // Retorna o símbolo do vencedor (X ou O)
    }
    if (tabuleiro3 === tabuleiro4 && tabuleiro4 === tabuleiro5 && tabuleiro3 !== " ") { // Verifica linha 2
        return tabuleiro3 // Retorna o símbolo do vencedor
    }
    if (tabuleiro6 === tabuleiro7 && tabuleiro7 === tabuleiro8 && tabuleiro6 !== " ") { // Verifica linha 3
        return tabuleiro6 // Retorna o símbolo do vencedor
    }
    if (tabuleiro0 === tabuleiro3 && tabuleiro3 === tabuleiro6 && tabuleiro0 !== " ") { // Verifica coluna 1
        return tabuleiro0 // Retorna o símbolo do vencedor
    }
    if (tabuleiro1 === tabuleiro4 && tabuleiro4 === tabuleiro7 && tabuleiro1 !== " ") { // Verifica coluna 2
        return tabuleiro1 // Retorna o símbolo do vencedor
    }
    if (tabuleiro2 === tabuleiro5 && tabuleiro5 === tabuleiro8 && tabuleiro2 !== " ") { // Verifica coluna 3
        return tabuleiro2 // Retorna o símbolo do vencedor
    }
    if (tabuleiro0 === tabuleiro4 && tabuleiro4 === tabuleiro8 && tabuleiro0 !== " ") { // Verifica diagonal principal
        return tabuleiro0 // Retorna o símbolo do vencedor
    }
    if (tabuleiro2 === tabuleiro4 && tabuleiro4 === tabuleiro6 && tabuleiro2 !== " ") { // Verifica diagonal secundária
        return tabuleiro2 // Retorna o símbolo do vencedor
    }
    return null // Retorna null se não houver vencedor
}

// Função principal para executar o jogo
function jogar() { // Define a função que controla o fluxo do jogo
    let jogadorAtual = "X" // Define o primeiro jogador como X
    for (let i = 0; i < 9; i++) { // O jogo pode ter no máximo 9 jogadas
        imprimirTabuleiro() // Exibe o tabuleiro atual
        let movimento = input.questionInt(`Jogador ${jogadorAtual}, escolha uma posicao (1-9): `) - 1 // Solicita a posição ao jogador e ajusta para 0-8
        
        if (movimento >= 0 && movimento < 9) { // Verifica se a posição está dentro do intervalo
            if (tabuleiro0 === " " && movimento === 0) { // Verifica se a posição 0 está vazia
                tabuleiro0 = jogadorAtual // Atualiza a posição no tabuleiro
            } else if (tabuleiro1 === " " && movimento === 1) { // Verifica se a posição 1 está vazia
                tabuleiro1 = jogadorAtual // Atualiza a posição no tabuleiro
            } else if (tabuleiro2 === " " && movimento === 2) { // Verifica se a posição 2 está vazia
                tabuleiro2 = jogadorAtual // Atualiza a posição no tabuleiro
            } else if (tabuleiro3 === " " && movimento === 3) { // Verifica se a posição 3 está vazia
                tabuleiro3 = jogadorAtual // Atualiza a posição no tabuleiro
            } else if (tabuleiro4 === " " && movimento === 4) { // Verifica se a posição 4 está vazia
                tabuleiro4 = jogadorAtual // Atualiza a posição no tabuleiro
            } else if (tabuleiro5 === " " && movimento === 5) { // Verifica se a posição 5 está vazia
                tabuleiro5 = jogadorAtual // Atualiza a posição no tabuleiro
            } else if (tabuleiro6 === " " && movimento === 6) { // Verifica se a posição 6 está vazia
                tabuleiro6 = jogadorAtual // Atualiza a posição no tabuleiro
            } else if (tabuleiro7 === " " && movimento === 7) { // Verifica se a posição 7 está vazia
                tabuleiro7 = jogadorAtual // Atualiza a posição no tabuleiro
            } else if (tabuleiro8 === " " && movimento === 8) { // Verifica se a posição 8 está vazia
                tabuleiro8 = jogadorAtual // Atualiza a posição no tabuleiro
            } else { // Se a posição já estiver ocupada
                console.log("Posição inválida ou já ocupada, escolha outra.") // Exibe mensagem de erro
                input.question("Pressione Enter para continuar...") // Espera o usuário pressionar Enter
                i-- // Reduz o contador para repetir a jogada
                continue // Volta para o início do loop
            }

            let vencedor = verificarVencedor() // Verifica se há um vencedor
            
            if (vencedor) { // Se houver um vencedor
                imprimirTabuleiro() // Exibe o tabuleiro final
                console.log(`Jogador ${vencedor} ganhou!`) // Exibe a mensagem de vitória
                return // Encerra o jogo
            }
            // Alterna entre os jogadores
            if (jogadorAtual === "X") { 
                jogadorAtual = "O" // Muda para O
            } else { 
                jogadorAtual = "X" // Muda para X
            }
        } else { // Se a posição não for válida
            console.log("Posição inválida, escolha outra.") // Exibe mensagem de erro
            input.question("Pressione Enter para continuar...") // Espera o usuário pressionar Enter
            i-- // Reduz o contador para repetir a jogada
        }
    }

    imprimirTabuleiro() // Exibe o tabuleiro final
    console.log("Empate!") // Exibe mensagem de empate
}

// Inicia o jogo
jogar() // Chama a função para iniciar o jogo
