const acender = document.getElementById('on')
const apagar = document.getElementById('off')
const lamp = document.getElementById('dlg')


acender.addEventListener('click', lampOn)
apagar.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dbclick', lampQ)

function broken() {
    return dlg.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!broken()) {
        lamp.src = './img/ligada.jpg'
    }

}

function lampOff() {
    if (!broken()) {
        lamp.src = './img/desligada.jpg'
    }

}

function lampQ() {
    lampQ.src = './img/quebrada.jpg'
}
