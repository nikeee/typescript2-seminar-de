function foo() {
    this.solution = 42; // Okay, this ist "any"
}
function bar(this: void) {
    this.solution = 42; // Fehler, this ist "void"
}
// Die emittierten JS-Funktionen sehen
// beide gleich aus:
function foo() { this.solution = 42; }
function bar() { this.solution = 42; }