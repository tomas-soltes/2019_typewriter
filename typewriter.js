"use strict";

let i = 0;
const text = document.getElementById("typewriter").innerHTML;
document.getElementById("typewriter").innerHTML = "";
console.log(text);

function random(min, max) {
    return min + Math.random() * (max - min);
}


const audioLetter1 = document.getElementById("typekey1");
const audioLetter2 = document.getElementById("typekey2");
const audioSpace = document.getElementById("typespace");
var allAudios = document.querySelectorAll('audio');

function stopAllAudio() {
    allAudios.forEach(function (audio) {
        audio.pause();
    });
}

document.querySelector(".playButton").addEventListener("click", typeWriter);

function typeWriter() {
    stopAllAudio();
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    if (text.charAt(i) == " ") {
        audioSpace.play()
    }
    if ((text.charAt(i) == "a") || (text.charAt(i) == "i") || (text.charAt(i) == "o")) {
        audioLetter2.play();
    } else {
        audioLetter1.play();
    }

    i++;
    setTimeout(typeWriter, random(200, 600));
    if (i == text.length) {
        document.getElementById("typewriter").innerHTML = "";
        i = 0;
    };
}