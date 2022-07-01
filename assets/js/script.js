'use strict'

//Variável de controle
var play = false;

//Cria o componente de áudio especificando a URL
var audio = new Audio('assets/audio/track-tribe.mp3');

document.querySelector('#play').addEventListener('click', () => {

    if (play)
        return;

    //Reproduz o áudio
    audio.play();

    play = true;
});

document.querySelector('#pause').addEventListener('click', () => {

    //Pausa o áudio
    audio.pause();

    play = false;
});

document.querySelector('#stop').addEventListener('click', () => {

    //Pausa o áudio
    audio.pause();

    //Volta para o ínicio do track
    audio.currentTime = 0;

    play = false;
});