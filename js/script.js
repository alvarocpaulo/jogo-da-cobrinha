let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16*BhxBrowser,16*box);
}

criarBG();