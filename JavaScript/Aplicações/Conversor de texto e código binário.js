/**
 * Conversor de texto em código binário e código binário em texto
 * @author Erica Viana
 */

// Importação de biblioteca
const input = require('readline-sync') // Biblioteca para capturar entradas do usuário
const colors = require('colors') // Biblioteca para colorir o texto de saída

// Variáveis - O algoritmo
let opcao

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Conversor de texto em código binário e código binário em texto")

// Função para converter texto em binário
function textoParaBinario(texto) {
    return texto // Recebe o texto como parâmetro
        .split('') // Divide o texto em caracteres individuais
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0')) // Converte cada caractere para código binário
        .join(' ') // Junta os códigos binários em uma única string, separados por espaço
}

// Função para converter binário em texto
function binarioParaTexto(binario) {
    return binario // Recebe o código binário como parâmetro
        .split(' ') // Divide a string de binário em blocos de 8 bits
        .map(byte => String.fromCharCode(parseInt(byte, 2))) // Converte cada bloco de 8 bits de volta para texto
        .join('') // Junta os caracteres em uma única string
}

// Entrada - o usuário escolhe a opção de conversão
opcao = input.question("Escolha a conversao:\n1 - Texto para Binario\n2 - Binario para Texto\n") // Captura a escolha do usuário

// Processamento e saída
if (opcao == '1') { // Verifica se a opção é 1 (Texto para Binário)
    let texto = input.question("Digite o texto para converter em binario: ") // Captura o texto a ser convertido
    let resultado = textoParaBinario(texto) // Converte o texto para binário
    console.log(colors.green(`Binário: ${resultado}`)) // Exibe o binário com cor verde
} else if (opcao == '2') { // Verifica se a opção é 2 (Binário para Texto)
    let binario = input.question("Digite o codigo binario para converter em texto (separado por espacos): ") // Captura o código binário
    let resultado = binarioParaTexto(binario) // Converte o binário para texto
    console.log(colors.green(`Texto: ${resultado}`)) // Exibe o texto convertido
} else {
    console.log(colors.red("Opção inválida!")) // Exibe mensagem de erro se a opção for inválida
}

// Instalar as bibliotecas:
// npm install readline-sync colors
