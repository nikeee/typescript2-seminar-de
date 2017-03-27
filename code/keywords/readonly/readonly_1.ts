// Als freie Funktion
function addWrong(a: Vector2, b: Vector2) {
    a.x += b.x; // Fehler, da Feld readonly
    a.y += b.y; // Fehler, da Feld readonly
}
function addRight(a: Vector2, b: Vector2) {
    return { // Neues Objekt erstellen
        x: a.x + b.x, // Zuweisung innerhalb von
        y: a.y + b.y, // Object-Initializer
    };
}
// Innerhalb der Klasse
class Vector2Class implements Vector2 {
    //...
    public add(other: Vector2) {
        // Neues Objekt zurückgeben,
        // statt aktuelle Instanz zu verändern
        return new Vector2Class(this.y + other.x,
                           this.y + other.y);
    }
}