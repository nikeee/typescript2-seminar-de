interface Point2 {
    x: number;
    y: number;
}
interface ReadonlyPoint2 {
    readonly x: number;
    readonly y: number;
}
function makeImmutable(p: Point2): ReadonlyPoint2 {
    // Objekt wird nicht verändert, aber es wird nur
    // lesbar zurückgegeben
    return p;
}
let p = makeImmutable({ x: 1, y: 0 });
p.y = 1; // Fehler, da y readonly