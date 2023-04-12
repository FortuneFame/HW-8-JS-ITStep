"use strict";

// --------------------------------- Task-3 ---------------------------------


const day = document.getElementById('day');
const hours = document.getElementById('hours');
const minuts = document.getElementById('minuts');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`);

function countDownTimer() {

    const todayDate = Date.now();
    const gap = newYear - todayDate;

    const d = Math.floor(gap / 1000 / 60 / 60 / 24);
    const h = Math.floor((gap / 1000 / 60 / 60) % 24);
    const m = Math.floor((gap / 1000 / 60) % 60);
    const s = Math.floor((gap / 1000) % 60);

    day.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minuts.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(countDownTimer, 1000);
