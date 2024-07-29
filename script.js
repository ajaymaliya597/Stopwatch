let day = document.querySelector('#day');
let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');
let mSecond = document.querySelector('#m-second');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false; 

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    day.textContent = "Day: 00";
    hour.textContent = "Hour: 00";
    minute.textContent = "Minute: 00";
    second.textContent = "Second: 00";
    mSecond.textContent = "MiliSecond: 00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    day.textContent = `Day: ${String(days).padStart(2, "0")}`;
    hour.textContent = `Hour: ${String(hours).padStart(2, "0")}`;
    minute.textContent = `Minute: ${String(minutes).padStart(2, "0")}`;
    second.textContent = `Second: ${String(seconds).padStart(2, "0")}`;
    mSecond.textContent = `MiliSecond: ${String(milliseconds).padStart(2, "0")}`;
}

let change = document.querySelector('#change');
let images = [
    './2.jpg',
    './3.jpg',
    './4.jpg',
    './5.jpg'
];
let currentIndex = 0;

change.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
});
