interface Vector2 {
    readonly x: number;
    readonly y: number;
}
let foo: Vector2 = {
    x: 42,
    y: 13.37,
};
foo.x = 43; // Fehler

// Innerhalb einer Klasse:
// "implements Vector2" kann weggelassen werden
class Vector2Class implements Vector2 {
    // readonly Als Modifier in Feld:
    public readonly x: number;
    public readonly y: number;
    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
// ...ist identisch zu:
class Vector2Class {
    // readonly mit Deklaration der Felder direkt
    // innerhalb der Konstruktor-Parameter
    public constructor(
                public readonly x: number,
                public readonly y: number,
            ) {
         /* leerer ctor */
    }
}
let bar = new Vector2Class(0, 1);
bar.y = 2; // Fehler, da Feld readonly

// auch Index-Singaturen können als readonly
// gekennzeichnet werden
interface Dictionary<T> {
    readonly [key: string]: T;
}
let fooDict: Dictionary<number> = {
    bar: 32,
};
fooDict["bar"] = 42;
// -> Fehler, da Index-Zugriff readonly
