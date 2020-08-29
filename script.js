canvas = document.getElementById("gc");

let digits = 4;
let timeSteps = 100;
let A = new Block(400, 0, 1, 40, 40, "rgb(143, 143, 143)");
let M = Math.pow(100, digits - 1);
let B = new Block(800, -3 / timeSteps, M, 80, 80, "rgb(140, 201, 255)");
let count = 0;
let div = document.querySelector(".collisions");
div.innerText = count;

window.onload = function () {
    ctx = canvas.getContext("2d");
    interval = setInterval(main, 1000 / 120);
};

const main = async () => {
    ctx.fillStyle = "rgb(218, 218, 218)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < timeSteps; i++) {
        A.show();
        B.show();

        ctx.fillStyle = "red";
        ctx.fillRect(A.x, A.y, 1, 1);
        ctx.fillRect(B.x, B.y, 1, 1);

        ctx.fillStyle = "green";
        ctx.fillRect(A.x + A.w - 1, A.y, 1, 1);
        ctx.fillRect(B.x + B.w - 1, B.y, 1, 1);

        if (A.x + A.w >= B.x || A.x >= B.x + B.w) {
            console.log("collided");
            count++;
            div.innerText = count;
            av = A.getNewVel(B);
            bv = B.getNewVel(A);
            A.v = av;
            B.v = bv;
        }
        if (A.hitWall()) {
            A.reverseVel();
            count++;
            div.innerText = count;
        }
        if (B.hitWall()) {
            B.reverseVel();
            count++;
            div.innerText = count;
        }
        A.update();
        B.update();
    }
};

// function updateCount() {
//     count++;
//     div.innerText = count;
// }
