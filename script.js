canvas = document.getElementById("gc");

let digits = 1;
let timeSteps = 10;
let A = new Block(400, 0, 1, 40, 40, "rgb(143, 143, 143)");
let M = Math.pow(100, digits - 1);
let B = new Block(800, -3 / timeSteps, M, 80, 80, "rgb(140, 201, 255)");
let count = 0;
let div = document.querySelector(".collisions");
let intervals = [];
div.innerText = count;

window.onload = () => {
    ctx = canvas.getContext("2d");
    interval = setInterval(main, 1000 / 120);
    intervals.push(interval);
};

const main = async () => {
    ctx.fillStyle = "rgb(218, 218, 218)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < timeSteps; i++) {
        if (A.x + A.w >= B.x || A.x >= B.x + B.w) {
            updateCount();
            av = A.getNewVel(B);
            bv = B.getNewVel(A);
            A.v = av;
            B.v = bv;
        }
        if (A.hitWall()) {
            A.reverseVel();
            updateCount();
        }
        if (B.hitWall()) {
            B.reverseVel();
            updateCount();
        }
        A.update();
        B.update();
    }
    A.show();
    B.show();

    ctx.fillStyle = "red";
    ctx.fillRect(A.x, A.y, 1, 1);
    ctx.fillRect(B.x, B.y, 1, 1);

    ctx.fillStyle = "green";
    ctx.fillRect(A.x + A.w - 1, A.y, 1, 1);
    ctx.fillRect(B.x + B.w - 1, B.y, 1, 1);
};

function updateCount() {
    count++;
    div.innerText = count;
}

function simulate() {
    inputDigits = document.getElementById("digits").value;
    inputTimeSteps = document.getElementById("timeSteps").value;
    inputVel = document.getElementById("vel").value;

    clearIntervals();

    count = 0;
    div.innerText = count;
    digits = inputDigits.length == 0 ? 1 : Number(inputDigits);
    timeSteps = inputTimeSteps.length == 0 ? 10 : Number(inputTimeSteps);
    Bv = inputVel.length == 0 ? 3 : Number(inputVel) * -1;
    A = new Block(400, 0, 1, 40, 40, "rgb(143, 143, 143)");
    M = Math.pow(100, digits - 1);
    B = new Block(800, -Bv / timeSteps, M, 80, 80, "rgb(140, 201, 255)");

    run();
}

function run() {
    newInterval = setInterval(main, 1000 / 120);
    intervals.push(newInterval);
}

function clearIntervals() {
    for (let i of intervals) {
        clearInterval(i);
    }
}
