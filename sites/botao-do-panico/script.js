const alertButton = document.getElementById("alertButton") // Obtém o elemento com id "alertButton" para ser usado como botão de alerta

let alertaAtivo = false // Variável de estado que indica se o alerta sonoro e LED estão ativos, inicialmente falso

const somAlerta = new Audio("sound/alarme.mp3") // Cria um objeto de áudio com o som do alarme

function ativarAlerta() { // Função que ativa o alerta sonoro, o LED e muda a imagem do botão
    somAlerta.loop = true // Configura o som para repetir continuamente enquanto ativo
    somAlerta.play() // Inicia a reprodução do som do alarme
    alertaAtivo = true // Define o estado do alerta como ativo
    ligarLed() // Chama a função para ligar o LED do dispositivo
    alertButton.src = "img/botao_ativo.jpg" // Altera a imagem para o estado ativo quando o alerta é acionado
}

function desativarAlerta() { // Função que desativa o alerta sonoro, o LED e restaura a imagem original do botão
    somAlerta.pause() // Pausa a reprodução do som do alarme
    somAlerta.currentTime = 0 // Reinicia o som para o início, caso seja reativado
    alertaAtivo = false // Define o estado do alerta como inativo
    desligarLed() // Chama a função para desligar o LED do dispositivo
    alertButton.src = "img/botao_inicial.png" // Retorna a imagem ao estado inativo quando o alerta é desativado
}

alertButton.addEventListener("mousedown", (event) => { // Adiciona um evento para ativar o alerta quando o botão é pressionado com o mouse
    event.preventDefault() // Impede o comportamento padrão do clique no botão
    if (!alertaAtivo) ativarAlerta() // Ativa o alerta se ele estiver inativo
})

alertButton.addEventListener("mouseup", (event) => { // Adiciona um evento para desativar o alerta quando o botão é solto
    event.preventDefault() // Impede o comportamento padrão ao soltar o botão
    if (alertaAtivo) desativarAlerta() // Desativa o alerta se ele estiver ativo
})

alertButton.addEventListener("touchstart", (event) => { // Adiciona um evento para ativar o alerta ao toque em dispositivos móveis
    event.preventDefault() // Impede o comportamento padrão do toque
    if (!alertaAtivo) ativarAlerta() // Ativa o alerta se ele estiver inativo
})

alertButton.addEventListener("touchend", (event) => { // Adiciona um evento para desativar o alerta ao final do toque em dispositivos móveis
    event.preventDefault() // Impede o comportamento padrão ao final do toque
    if (alertaAtivo) desativarAlerta() // Desativa o alerta se ele estiver ativo
})

async function inicializarLed() { // Função assíncrona para configurar o LED do dispositivo
    try {
        stream = await navigator.mediaDevices.getUserMedia({ // Solicita acesso à câmera do dispositivo
            video: { facingMode: "environment" } // Define o uso da câmera traseira, se disponível
        })
        track = stream.getVideoTracks()[0] // Obtém a faixa de vídeo para controle do LED
        const capabilities = track.getCapabilities() // Verifica as capacidades do dispositivo, como suporte ao LED
        if (!capabilities.torch) { // Caso o dispositivo não suporte LED, exibe uma mensagem
            console.log("LED não suportado no dispositivo.") // Mensagem informando a ausência de suporte ao LED
            return // Sai da função se o LED não for suportado
        }
    } catch (error) {
        console.error(`Erro ao inicializar o LED: ${error}`) // Exibe um erro caso ocorra ao tentar acessar o LED
    }
}

async function ligarLed() { // Função assíncrona que liga o LED do dispositivo
    if (track) { // Verifica se a faixa de vídeo foi obtida com sucesso
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] }) // Ativa o LED do dispositivo aplicando a configuração
        } catch (error) {
            console.error(`Erro ao ligar o LED: ${error}`) // Exibe erro caso ocorra ao tentar ligar o LED
        }
    }
}

async function desligarLed() { // Função assíncrona que desliga o LED do dispositivo
    if (track) { // Verifica se a faixa de vídeo foi obtida com sucesso
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] }) // Desativa o LED aplicando a configuração
        } catch (error) {
            console.error(`Erro ao desligar o LED: ${error}`) // Exibe erro caso ocorra ao tentar desligar o LED
        }
    }
}

inicializarLed() // Chama a função para configurar o LED ao carregar a página
