class Block {
    constructor(x, v, m, w, h) {
        this.x = x;
        this.v = v;
        this.m = m;
        this.w = w;
        this.h = h;
        this.y = canvas.height - this.h;
    }
}
