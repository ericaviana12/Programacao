/**
 * Jogo de Adivinhar a Palavra (Forca)
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário

// Limpar a tela do console antes de uma nova entrada
console.clear() // Limpa a tela do console

// Instruções do jogo
console.log("Bem-vindo ao Jogo da Forca!") // Mensagem de boas-vindas
console.log("Você deve adivinhar a palavra secreta letra por letra.") // Instruções
console.log("Você tem 6 tentativas.") // Instruções
console.log("Digite 'sair' a qualquer momento para encerrar o jogo.") // Instruções sobre como sair

// Variáveis - O algoritmo
let palavraSecreta = '' // Inicializa a variável para armazenar a palavra secreta
let tentativas = 6 // Número de tentativas permitidas
let letrasTentadas = [] // Array para armazenar letras já tentadas
let letrasCorretas = [] // Array para armazenar letras corretas adivinhadas

// Escolher a palavra secreta aleatoriamente
const palavras = ['javascript', 'programacao', 'computador', 'desenvolvimento'] // Array com palavras possíveis
palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)] // Seleciona uma palavra aleatória

// Exibir a quantidade de letras da palavra secreta
console.log(`A palavra secreta tem ${palavraSecreta.length} letras.`) // Informa o número de letras da palavra secreta

// Função para aguardar antes de limpar a tela
function pausar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)) // Retorna uma promessa que resolve após um tempo especificado
}

// Processamento - Jogo
(async () => {
    while (tentativas > 0) { // Enquanto houver tentativas
        // Mostrar letras já tentadas
        console.log(`Letras tentadas: ${letrasTentadas.join(', ')}`) // Exibe letras que já foram tentadas

        // Cria a representação atual da palavra
        let palavraAtual = '' // Reinicia a palavra atual a cada rodada
        for (let k = 0; k < palavraSecreta.length; k++) { // Loop para criar a palavra atual
            if (letrasCorretas[k]) { // Se a letra foi correta
                palavraAtual += letrasCorretas[k] // Adiciona a letra correta à palavra atual
            } else {
                palavraAtual += '_' // Adiciona um underscore se a letra não foi acertada
            }
        }

        // Saída - Mostrar a palavra atual
        console.log(`Palavra: ${palavraAtual.split('').join(' ')}`) // Exibe a palavra atual com espaços entre as letras

        // Verifica se a palavra foi adivinhada antes de solicitar uma nova letra
        if (!palavraAtual.includes('_')) { // Se não há underscores
            console.log("Parabéns! Você adivinhou a palavra!") // Informa que o jogador venceu
            await pausar(3000) // Pausa por 3 segundos para permitir leitura da mensagem
            break // Encerra o loop
        }

        // Solicita uma letra ao jogador
        let letraAdivinhada = input.question("Adivinhe uma letra (ou digite 'sair' para encerrar o jogo): ").toLowerCase() // Solicita uma letra ao jogador

        // Permitir sair do jogo
        if (letraAdivinhada === 'sair') {
            console.log("Você saiu do jogo. A palavra era: " + palavraSecreta) // Informa que o jogador saiu
            return // Encerra o jogo
        }

        // Verifica se a letra já foi tentada
        if (letrasTentadas.includes(letraAdivinhada)) { // Se a letra já foi tentada
            console.log("Você já tentou essa letra. Tente outra.") // Informa que a letra já foi tentada
            await pausar(2000) // Pausa por 2 segundos antes de continuar
            console.clear() // Limpa a tela do console
            continue // Volta para o início do loop
        }

        letrasTentadas.push(letraAdivinhada) // Adiciona a letra tentada ao registro de letras

        // Atualiza a palavra atual
        for (let j = 0; j < palavraSecreta.length; j++) { // Loop para verificar a letra
            if (letraAdivinhada === palavraSecreta[j]) { // Se a letra adivinhada é igual à letra da palavra secreta
                letrasCorretas[j] = letraAdivinhada // Armazena a letra correta na posição correta
            }
        }

        // Saída - Mostrar a palavra atual e o resultado da tentativa
        if (palavraSecreta.includes(letraAdivinhada)) { // Se acertou a letra
            console.log(`Você acertou a letra '${letraAdivinhada}'!`) // Informa que a letra foi acertada
        } else {
            tentativas-- // Reduz o número de tentativas
            console.log(`Letra '${letraAdivinhada}' não está na palavra. Você ainda tem ${tentativas} tentativas.`) // Informa que a letra não está na palavra
        }

        // Pausar antes de limpar a tela
        await pausar(2000) // Pausa por 2 segundos para leitura das mensagens
        console.clear() // Limpa a tela do console

        // Verifica se não há mais tentativas
        if (tentativas === 0) { // Se não há mais tentativas
            console.log(`Você perdeu! A palavra era: ${palavraSecreta}`) // Informa que o jogador perdeu e mostra a palavra secreta
            await pausar(3000) // Pausa por 3 segundos para permitir leitura da mensagem
            break // Encerra o loop
        }
    }
})()

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
