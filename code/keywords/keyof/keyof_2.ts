interface ColorVector extends Vector2 {
    color: string;
}
function getProp(v: ColorVector, key: keyof ColorVector) {
    return v[key];
}
const redArrow = { x: 1, y: 2, color: "#ff0000" };
const foo = getProp(redArrow, "color");
// foo hat Typ number | string
