/**
 * Previsão do tempo
 * @author Erica Viana
 */

// Importação de biblioteca
const axios = require('axios') // Biblioteca axios para realizar chamadas HTTP
const prompt = require('prompt-sync')() // Biblioteca prompt-sync para capturar a entrada do usuário

// Variáveis - O algoritmo
const apiKeyWeather = '7d950b09eda5a7bcf046662da2022822' // Sua chave de API do OpenWeatherMap
let cidade // Variável para armazenar o nome da cidade

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Previsão do tempo nas próximas 9 horas, com intervalos de 3 horas")

// Entrada - Atribuir valores as variáveis
cidade = prompt("Digite o nome da cidade: ") // Solicita o nome da cidade ao usuário

// Funções auxiliares
function formatarDataHora(dataHora) { // Define a função para formatar a data e hora
    const data = new Date(dataHora) // Cria um objeto Date a partir da dataHora fornecida
    const dia = String(data.getDate()).padStart(2, '0') // Obtém o dia e formata com 2 dígitos
    const mes = String(data.getMonth() + 1).padStart(2, '0') // Obtém o mês (0-11) e formata com 2 dígitos
    const ano = data.getFullYear() // Obtém o ano
    const horas = String(data.getHours()).padStart(2, '0') // Obtém as horas e formata com 2 dígitos
    const minutos = String(data.getMinutes()).padStart(2, '0') // Obtém os minutos e formata com 2 dígitos
    return { // Retorna um objeto com a data e a hora formatadas
        dataFormatada: `${dia}/${mes}/${ano}`, // Formata a data
        horaFormatada: `${horas}:${minutos}` // Formata a hora
    }
}

// Processamento - Fórmula para cálculo do código
async function obterPrevisao(cidade) { // Define a função assíncrona para obter a previsão do tempo
    const urlWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKeyWeather}&lang=pt_br&units=metric` // URL da API com a cidade e parâmetros

    try {
        const respostaWeather = await axios.get(urlWeather) // Faz a requisição à API e aguarda a resposta.

        // Verifica se a cidade foi encontrada
        if (respostaWeather.data.city) { // Se a cidade estiver presente na resposta
            const nomeCidade = respostaWeather.data.city.name // Obtém o nome da cidade
            const paisCidade = respostaWeather.data.city.country // Obtém o país da cidade
            console.log(`\nVocê selecionou a cidade: ${nomeCidade}, ${paisCidade}.`) // Exibe a cidade selecionada

            const previsoes = respostaWeather.data.list.slice(0, 3) // Obtém previsão para as próximas horas com intervalos de 3 horas

            for (const previsao of previsoes) { // Itera sobre as previsões
                const { dataFormatada, horaFormatada } = formatarDataHora(previsao.dt_txt) // Formata a data e a hora
                const temperatura = previsao.main.temp.toFixed(2) // Temperatura com 2 casas decimais
                const umidade = previsao.main.humidity.toFixed(2) // Umidade com 2 casas decimais
                const vento = previsao.wind.speed.toFixed(2) // Velocidade do vento com 2 casas decimais
                const chuva = (previsao.pop * 100).toFixed(2) // Probabilidade de chuva com 2 casas decimais

                // Exibe os dados da previsão
                console.log(`\nPrevisão para ${dataFormatada} às ${horaFormatada}:`) // Exibe a data e hora da previsão
                console.log(`  Temperatura: ${temperatura}°C`) // Exibe a temperatura
                console.log(`  Umidade: ${umidade}%`) // Exibe a umidade
                console.log(`  Velocidade do vento: ${vento} m/s`) // Exibe a velocidade do vento
                console.log(`  Probabilidade de chuva: ${chuva}%`) // Exibe a probabilidade de chuva
            }
        } else {
            console.error("Cidade não encontrada. Verifique o nome e tente novamente.") // Mensagem de erro caso a cidade não seja encontrada
        }
    } catch (error) {
        console.error("Erro ao obter dados da previsão:", error.response ? error.response.data.message : error.message) // Mensagem de erro ao fazer a requisição
    }
}

// Saída - Resultado do processamento
async function previsaoDoTempo() { // Define a função assíncrona principal
    console.log(`Buscando previsão para: ${cidade}...\n`) // Exibe a mensagem de busca
    await obterPrevisao(cidade) // Obtém a previsão do tempo
}

// Executa o programa
previsaoDoTempo() // Chama a função principal para executar o programa

// Comando para instalação da biblioteca axios e prompt-sync
// npm install axios prompt-sync
