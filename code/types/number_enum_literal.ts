// Number Literal Types
type Grade = 1 | 2 | 3 | 4 | 5 | 6;
let grades: Grade[] = [1, 3, 3];
grades.push(7); // Fehler, 7 ist keine "Grade"

// Enum Literal Types
enum Shape {
    Circle,
    Rectangle,
    Triangle,
}
let foo: Shape.Circle | Shape.Triangle;
foo = Shape.Rectangle; // Fehler
foo = Shape.Circle; // Okay

// Boolean Literal Types

let t: true = false; // Fehler

type bool2 = true | false; // Identisch zu boolean
let tf: bool2 = false; // Okay
