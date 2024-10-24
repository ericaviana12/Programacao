/**
 * Jogo de Adivinhação de Números
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Função principal do jogo
async function jogar() {
    // Limpar a tela do console antes de uma nova entrada
    console.clear() // Limpa o console para uma nova entrada

    // Variáveis - O algoritmo
    let numeroSecreto = Math.floor(Math.random() * 100) + 1 // Gera um número aleatório entre 1 e 100
    let tentativas = 10 // Define o número máximo de tentativas

    // Entrada - Escolha de modo de jogo
    let modo = input.question("Escolha o modo de jogo (1 - Single Player, 2 - Multiplayer): ") // Pergunta ao usuário qual modo de jogo deseja jogar

    // Verificar se a escolha é válida
    if (modo !== '1' && modo !== '2') { // Se o modo não for '1' ou '2'
        console.log("Modo inválido. O jogo será encerrado.") // Informa que o modo é inválido
        process.exit() // Encerra o jogo
    } else { // Se o modo for válido
        if (modo === '1') { // Se o modo escolhido for '1'
            console.log("Você está jogando no modo Single Player") // Informa que o usuário escolheu o modo Single Player
        } else { // Se o modo escolhido for '2'
            console.log("Você está jogando no modo Multiplayer") // Informa que o usuário escolheu o modo Multiplayer
        }
    }

    // Processamento - Jogo
    if (modo === '1') { // Se o modo for Single Player
        while (tentativas > 0) { // Enquanto ainda houver tentativas
            let palpite = input.questionInt('Adivinhe um numero entre 1 e 100: ') // Pede ao usuário para adivinhar um número

            if (palpite < 1 || palpite > 100) { // Verifica se o palpite está fora do intervalo válido
                console.log('Por favor, escolha um número entre 1 e 100.') // Pede para o usuário escolher um número válido
            } else if (palpite < numeroSecreto) { // Se o palpite for menor que o número secreto
                console.log('O número secreto é maior!') // Informa que o número secreto é maior
            } else if (palpite > numeroSecreto) { // Se o palpite for maior que o número secreto
                console.log('O número secreto é menor!') // Informa que o número secreto é menor
            } else { // Se o palpite for igual ao número secreto
                console.log('Parabéns! Você adivinhou o número!') // Informa que o usuário adivinhou corretamente
                break // Encerra o loop
            }

            tentativas-- // Reduz o número de tentativas restantes em 1
            if (tentativas === 0) { // Se não houver mais tentativas
                console.log(`Você perdeu! O número era: ${numeroSecreto}`) // Informa que o usuário perdeu e revela o número secreto
            }
        }
    } else { // Se o modo for Multiplayer
        let tentativasJogador1 = tentativas // Inicializa tentativas do Jogador 1
        let tentativasJogador2 = tentativas // Inicializa tentativas do Jogador 2

        while (tentativasJogador1 > 0 && tentativasJogador2 > 0) { // Enquanto ambos os jogadores tiverem tentativas
            console.clear() // Limpa a tela antes de cada nova tentativa

            let palpiteJogador1 = input.questionInt(`Jogador 1, adivinhe um numero entre 1 e 100 (Tentativas restantes: ${tentativasJogador1}): `) // Pede ao Jogador 1 para adivinhar um número
            let palpiteJogador2 = input.questionInt(`Jogador 2, adivinhe um numero entre 1 e 100 (Tentativas restantes: ${tentativasJogador2}): `) // Pede ao Jogador 2 para adivinhar um número

            // Processar palpite do Jogador 1
            if (palpiteJogador1 < 1 || palpiteJogador1 > 100) { // Verifica se o palpite do Jogador 1 está fora do intervalo válido
                console.log('Jogador 1, por favor, escolha um número entre 1 e 100.') // Pede para o Jogador 1 escolher um número válido
            } else if (palpiteJogador1 < numeroSecreto) { // Se o palpite do Jogador 1 for menor que o número secreto
                console.log('Jogador 1, o número secreto é maior!') // Informa que o número secreto é maior
            } else if (palpiteJogador1 > numeroSecreto) { // Se o palpite do Jogador 1 for maior que o número secreto
                console.log('Jogador 1, o número secreto é menor!') // Informa que o número secreto é menor
            } else { // Se o palpite do Jogador 1 for igual ao número secreto
                console.log("Jogador 1 venceu!") // Informa que o Jogador 1 venceu
                break // Encerra o loop
            }

            tentativasJogador1-- // Reduz o número de tentativas do Jogador 1 em 1

            // Processar palpite do Jogador 2
            if (palpiteJogador2 < 1 || palpiteJogador2 > 100) { // Verifica se o palpite do Jogador 2 está fora do intervalo válido
                console.log('Jogador 2, por favor, escolha um número entre 1 e 100.') // Pede para o Jogador 2 escolher um número válido
            } else if (palpiteJogador2 < numeroSecreto) { // Se o palpite do Jogador 2 for menor que o número secreto
                console.log('Jogador 2, o número secreto é maior!') // Informa que o número secreto é maior
            } else if (palpiteJogador2 > numeroSecreto) { // Se o palpite do Jogador 2 for maior que o número secreto
                console.log('Jogador 2, o número secreto é menor!') // Informa que o número secreto é menor
            } else { // Se o palpite do Jogador 2 for igual ao número secreto
                console.log("Jogador 2 venceu!") // Informa que o Jogador 2 venceu
                break // Encerra o loop
            }

            tentativasJogador2-- // Reduz o número de tentativas do Jogador 2 em 1

            // Verifica se algum jogador perdeu
            if (tentativasJogador1 === 0) { // Se o Jogador 1 não tiver mais tentativas
                console.log(`Jogador 1 perdeu! O número era: ${numeroSecreto}`) // Informa que o Jogador 1 perdeu e revela o número secreto
            }
            if (tentativasJogador2 === 0) { // Se o Jogador 2 não tiver mais tentativas
                console.log(`Jogador 2 perdeu! O número era: ${numeroSecreto}`) // Informa que o Jogador 2 perdeu e revela o número secreto
            }

            // Espera 3 segundos antes de limpar a tela
            await new Promise(resolve => setTimeout(resolve, 3000)) // Ajuste o tempo conforme necessário
        }
    }
}

// Iniciar o jogo
jogar()
