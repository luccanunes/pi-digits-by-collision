canvas = document.getElementById("gc");

let digits = 1;
let A = new Block(600, 0, 1, 40, 40);
let M = Math.pow(200, digits - 1);
let B = new Block(700, -5, M, 80, 80);

window.onload = function () {
    ctx = canvas.getContext("2d");
    setInterval(main, 1000 / 15);
};

const main = () => {
    ctx.fillStyle = "rgb(218, 218, 218)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgb(143, 143, 143)";
    ctx.fillRect(A.x, A.y, A.w, A.h);

    ctx.fillStyle = "rgb(140, 201, 255)";
    ctx.fillRect(B.x, B.y, B.w, B.h);
};
