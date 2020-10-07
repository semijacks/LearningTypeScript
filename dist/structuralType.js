"use strict";
const PrintPoint = (p) => {
    console.log(`The coordinates of point P are (${p.x},${p.y})`);
};
const point = { x: 24, y: 45 };
PrintPoint(point);
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(12, 23);
PrintPoint(newVPoint);
