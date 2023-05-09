

function voltar() {
    let vid = document.getElementById("video01");
    vid.currentTime = -5
}

function play() {
    let vid = document.getElementById("video01");
    vid.play();
}

function pause() {
    let vid = document.getElementById("video01");
    vid.pause()
}

function avançar() {
    let vid = document.getElementById("video01");
    vid.currentTime = +5
}