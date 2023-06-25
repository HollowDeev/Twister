let num1 = Math.floor(Math.random() * (4 - 1) + 1)
let num2 = Math.floor(Math.random() * (4 - 1) + 1)
let rodada = 0

let corEscolhida
let posicaoEscolhida
let jogadorDaRodada
let jogadores
let historico = []
let valorIndex = 0


const campo = document.getElementById('resultado')
const campoContador = document.getElementById('campo-contador')
const contador = document.getElementById('contador')

const campoJogador = document.getElementById('campo-jogador')
const jogador = document.getElementById('jogador')

const campoModal = document.getElementById('modal-inicio')

const girarRoleta = () => {
    const campoCor = document.getElementById('cor')
    const posicao = document.getElementById('posicao')

    let num1 = Math.floor(Math.random() * (5 - 1) + 1)
    let num2 = Math.floor(Math.random() * (5 - 1) + 1)

    switch (num1) {
        case 1:
            campoCor.style.backgroundColor = 'red'
            corEscolhida = 'vermelha'
            break

        case 2:
            campoCor.style.backgroundColor = 'blue'
            corEscolhida = 'azul'

            break

            
        case 3:
            campoCor.style.backgroundColor = 'green'
            corEscolhida = 'verde'

            break

            
        case 4:
            campoCor.style.backgroundColor = 'yellow'
            corEscolhida = 'amarelo'

            break
    }

    switch (num2) {
        case 1:
            posicao.src = 'img/mao-direita.png'
            posicaoEscolhida = 'mao-direita'
            break

        case 2:
            posicao.src = 'img/mao-esquerda.png'
            posicaoEscolhida = 'mao-esquerda'
            break

        case 3:
            posicao.src = 'img/pe-esquerdo.jpg'
            posicaoEscolhida = 'pe-esquerda'

            break

        case 4:
            posicao.src = 'img/pe-direito.jpg'
            posicaoEscolhida = 'pe-direito'
            break
    }

    campo.style.display = 'flex'

    rodada += 1

    let rodadaMaxima = (parseInt(document.getElementById('limite').value) + 1)

    if(rodadaMaxima != 0) {
        if(rodada == rodadaMaxima) {
            finalizarJogo()
        }
    }

    if (rodada != 0) {
        campoContador.style.display = 'block'
        contador.innerText = rodada

        campoJogador.style.display = 'block'

        if(jogadorDaRodada == jogadores[1]) {
            jogadorDaRodada = jogadores[0]
        } else {
            jogadorDaRodada = jogadores[1]
        }

        jogador.innerText = jogadorDaRodada
    }

    const resultadoRodada = {
        jogador: jogadorDaRodada,
        rodada: rodada,
        cor: corEscolhida,
        posicao: posicaoEscolhida
    }

    historico.push(resultadoRodada)

    exibirHistorico()
    console.log(rodadaMaxima)
}

campoModal.showModal()

const iniciarJogo = () => {
    const nome1 = document.getElementById('nome1').value
    const nome2 = document.getElementById('nome2').value

    jogadores = [nome1, nome2]
    jogadorDaRodada = jogadores[1]

    campoModal.close()
}

const exibirHistorico = () => {
    const campoHistorico = document.getElementById('historico')

    historico.forEach((el, index) => {

        if (index == valorIndex) {
            let partida = document.createElement('li')
            partida.innerHTML = `<span>Rodada: </span> ${el.rodada} | <span>Jogador: </span> ${el.jogador} | <span>Cor: </span>${el.cor} | <span>Posicao: </span> ${el.posicao}`

            campoHistorico.appendChild(partida)
            valorIndex += 1
        }
    })

    
    document.getElementById('campo-historico').style.display = 'flex'
}

const finalizarJogo = () => {
    const modalFim = document.getElementById('modal-fim')
    modalFim.showModal()
}
