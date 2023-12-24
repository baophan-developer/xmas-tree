const main = document.getElementById("main");
const makeSnow = () => {
    const snow = document.createElement("div");
    const size = Math.random() * 6.5 + 4.5;
    snow.classList.add("snow");
    snow.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
    snow.style.fontSize = size + "px";
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

setInterval(makeSnow, 10);
