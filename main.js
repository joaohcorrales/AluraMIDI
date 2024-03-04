const todosBotoes = document.querySelectorAll('.tecla')

const tocaTodosSons = (seletorAudio) => {
    const elemento = document.querySelector(seletorAudio)
    if (elemento != null && elemento.localname === 'audio') {
        elemento.play()
    } else {
        alert('Elemento não encontrado')
    }
    // elemento.play()
} 

for (let i = 0; i < todosBotoes.length; i++) {
    const botoes = todosBotoes[i]
    const instrumento = botoes.classList[1];

    botoes.onclick = function () {
        tocaTodosSons(`#som_${instrumento}`)
    }

    botoes.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            botoes.classList.add('ativa')
        }
    }

    botoes.onkeyup = function (event) {
        botoes.classList.remove('ativa')
    }
}
