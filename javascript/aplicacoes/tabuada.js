/**
 * Gerador de Tabuada
 * @author Erica Viana
 */

const input = require('readline-sync')

console.clear()
console.log("Tabuada")

let valor = Number(input.question("Digite o valor da tabuada: "))

for (let i = 1; i <= 10; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`)
}
