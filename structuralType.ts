interface Point {
  x: number;
  y: number;
}

const PrintPoint = (p: Point): void => {
  console.log(`The coordinates of point P are (${p.x},${p.y})`);
};

const point = { x: 24, y: 45 };
PrintPoint(point);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(12, 23);
PrintPoint(newVPoint);
