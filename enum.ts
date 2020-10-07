enum Color {
  red,
  green,
  blue,
}

let c: Color = Color.green;
console.log(c);

enum Shapes {
  rectangle = 1,
  green = 2,
  blue = 5,
}

let ShapeName: string = Shapes[5];
console.log(ShapeName);
