/**
 * Cálculo do Perímetro e Área de um Retângulo
 * @author Erica Viana
 */

// Importar biblioteca necessária
const input = require('readline-sync')
const colors = require('colors')

// Variáveis
let comprimento, largura, perimetro, area

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto
console.log("Cálculo do Perímetro e Área de um Retângulo")

// Entrada
comprimento = Number(input.question("Digite o comprimento do retangulo: "))
largura = Number(input.question("Digite a largura do retangulo: "))

// Processamento
perimetro = 2 * (comprimento + largura)
area = comprimento * largura

// Saída
console.log(`Perímetro: ${perimetro}`.green)
console.log(`Área: ${area}`.blue)

// Comando para instalação das bibliotecas:
// npm install readline-sync colors
