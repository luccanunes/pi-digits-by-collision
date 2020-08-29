canvas = document.getElementById("gc");

let digits = 1;
let A = new Block(600, 0, 1, 40, 40);
let M = Math.pow(200, digits - 1);
let B = new Block(700, -5, M, 80, 80);
let count = 0;

window.onload = function () {
    ctx = canvas.getContext("2d");
    interval = setInterval(main, 1000 / 120);
};

const main = async () => {
    ctx.fillStyle = "rgb(218, 218, 218)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgb(143, 143, 143)";
    ctx.fillRect(A.x, A.y, A.w, A.h);

    ctx.fillStyle = "rgb(140, 201, 255)";
    ctx.fillRect(B.x, B.y, B.w, B.h);

    ctx.fillStyle = "red";
    ctx.fillRect(A.x, A.y, 1, 1);
    ctx.fillRect(B.x, B.y, 1, 1);

    ctx.fillStyle = "green";
    ctx.fillRect(A.x + A.w - 1, A.y, 1, 1);
    ctx.fillRect(B.x + B.w - 1, B.y, 1, 1);

    A.update();
    B.update();

    if (A.hitWall()) A.reverseVel();
    if (B.hitWall()) B.reverseVel();

    if (A.x + A.w == B.x + 5 || A.x + 5 == B.x + B.w) {
        console.log("collided");
        av = A.getNewVel(B);
        bv = B.getNewVel(A);
        A.v = av;
        B.v = bv;
    }
};
