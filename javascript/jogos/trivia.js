/**
 * Jogo de Trivia (Perguntas e Respostas)
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Entrada - Perguntas e respostas
let pergunta1 = "Qual é a capital da França?" // Pergunta 1
let resposta1_a = "a) Madrid" // Resposta 1A
let resposta1_b = "b) Paris" // Resposta 1B
let resposta1_c = "c) Roma" // Resposta 1C
let resposta1_d = "d) Londres" // Resposta 1D
let respostaCorreta1 = 'b' // Resposta correta para pergunta 1

let pergunta2 = "Qual é o maior planeta do sistema solar?" // Pergunta 2
let resposta2_a = "a) Terra" // Resposta 2A
let resposta2_b = "b) Marte" // Resposta 2C
let resposta2_c = "c) Júpiter" // Resposta 2B
let resposta2_d = "d) Saturno" // Resposta 2D
let respostaCorreta2 = 'c' // Resposta correta para pergunta 2

let pergunta3 = "Quem escreveu 'Dom Casmurro'?" // Pergunta 3
let resposta3_a = "a) Machado de Assis" // Resposta 3A
let resposta3_b = "b) José de Alencar" // Resposta 3B
let resposta3_c = "c) Clarice Lispector" // Resposta 3C
let resposta3_d = "d) Érico Veríssimo" // Resposta 3D
let respostaCorreta3 = 'a' // Resposta correta para pergunta 3

let pergunta4 = "Qual é o maior oceano do mundo?" // Pergunta 4 (substituição da pergunta anterior)
let resposta4_a = "a) Oceano Atlântico" // Resposta 4A
let resposta4_b = "b) Oceano Índico" // Resposta 4B
let resposta4_c = "c) Oceano Ártico" // Resposta 4C
let resposta4_d = "d) Oceano Pacífico" // Resposta 4D
let respostaCorreta4 = 'd' // Resposta correta para pergunta 4

let pergunta5 = "Em que ano o homem pisou na Lua?" // Pergunta 5
let resposta5_a = "a) 1965" // Resposta 5A
let resposta5_b = "b) 1969" // Resposta 5B
let resposta5_c = "c) 1971" // Resposta 5C
let resposta5_d = "d) 1975" // Resposta 5D
let respostaCorreta5 = 'b' // Resposta correta para pergunta 5

let pontuacao = 0 // Inicializa a pontuação do jogador

// Função para processar as perguntas
function processarPergunta(pergunta, respostaA, respostaB, respostaC, respostaD, respostaCorreta) {
    console.log(pergunta) // Exibe a pergunta
    console.log(respostaA) // Exibe resposta A
    console.log(respostaB) // Exibe resposta B
    console.log(respostaC) // Exibe resposta C
    console.log(respostaD) // Exibe resposta D
    let respostaJogador = input.question("Escolha a resposta (a, b, c ou d): ").toLowerCase() // Solicita a resposta do jogador

    if (respostaJogador === respostaCorreta) { // Verifica se a resposta está correta
        console.log("Resposta correta!") // Informa que a resposta está correta
        pontuacao++ // Aumenta a pontuação
    } else {
        console.log(`Resposta incorreta! A resposta correta era: ${respostaCorreta}`) // Informa a resposta correta
    }
}

// Processar cada pergunta
processarPergunta(pergunta1, resposta1_a, resposta1_b, resposta1_c, resposta1_d, respostaCorreta1) // Pergunta 1
processarPergunta(pergunta2, resposta2_a, resposta2_b, resposta2_c, resposta2_d, respostaCorreta2) // Pergunta 2
processarPergunta(pergunta3, resposta3_a, resposta3_b, resposta3_c, resposta3_d, respostaCorreta3) // Pergunta 3
processarPergunta(pergunta4, resposta4_a, resposta4_b, resposta4_c, resposta4_d, respostaCorreta4) // Pergunta 4
processarPergunta(pergunta5, resposta5_a, resposta5_b, resposta5_c, resposta5_d, respostaCorreta5) // Pergunta 5

// Saída - Mostrar pontuação final
console.log(`Sua pontuação final é: ${pontuacao} de 5`) // Exibe a pontuação final
