function getProp(v: Vector2, dim: keyof Vector2) {
    // dim hat Typ "x" | "y"
    return v[dim]; // Verwendung als Attribut sicher
}
// getProp hat den Rückgabetyp number

let foo = {x: 2, y: 3};
getProp(foo, "z");
// -> Fehler, "z" ist kein Key von Vector2
getProp(foo, "y"); // Okay
