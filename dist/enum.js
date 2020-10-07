"use strict";
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let c = Color.green;
console.log(c);
var Shapes;
(function (Shapes) {
    Shapes[Shapes["rectangle"] = 1] = "rectangle";
    Shapes[Shapes["green"] = 2] = "green";
    Shapes[Shapes["blue"] = 5] = "blue";
})(Shapes || (Shapes = {}));
let ShapeName = Shapes[5];
console.log(ShapeName);
