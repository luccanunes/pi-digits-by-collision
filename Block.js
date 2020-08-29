class Block {
    constructor(x, v, m, w, h) {
        this.x = x;
        this.v = v;
        this.m = m;
        this.w = w;
        this.h = h;
        this.y = canvas.height - this.h;
    }

    update() {
        this.x += this.v;
    }

    hitWall() {
        return this.x <= 0;
    }

    reverseVel() {
        this.v *= -1;
    }

    getNewVel(other) {
        let newV = (this.v * (this.m - other.m) + 2 * other.m * other.v) / (this.m + other.m);
        return newV;
    }
}
