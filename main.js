import {colors} from "./data.mjs";

const render  = document.getElementById("render");
const color = (name, render) =>{
    const color = document.createElement("div");
    const card = document.createElement("div");
    color.style.background = name;
    color.classList = `div`;
    color.innerHTML = name;
    card.classList = `card`
    card.appendChild(color);
    render.appendChild(card)
}

const copy = (text) =>{
    navigator.clipboard.writeText(text);
}

const textUpdate = (text) =>{
    const copied = document.getElementById("copied");
    copied.innerHTML = text;
}

for (let i = 0; i < colors.length; i++){
    color(colors[i], render);
}

const arr = document.querySelectorAll(".div");
for (let i = 0; i < arr.length; i++){
    arr[i].addEventListener("click", ()=>{
        const text = arr[i].innerHTML;
        arr[i].style.cursor = `crosshair`;
        copy(text);
        textUpdate(text);
    });
    arr[i].addEventListener("mouseout", ()=>{
        arr[i].style.cursor = `pointer`;
    });
}
