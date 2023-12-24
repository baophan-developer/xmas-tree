const main = document.getElementById("main");
const makeSnow = () => {
    const snow = document.createElement("div");
    const size = Math.random() * 4.5 + 3.5;
    snow.classList.add("snow");
    snow.style.width = size + "px";
    snow.style.height = size + "px";
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.opacity = size / 8;
    snow.style.zIndex = 5;
    if (size < 7) {
        snow.style.zIndex = -5;
    }
    snow.style.animationDuration = Math.random() * 3 + 2 + "s";
    main.appendChild(snow);
    setTimeout(() => snow.remove(), 5000);
};

const audio = new Audio("./music.mp3");
audio.play();
setInterval(makeSnow, 10);
