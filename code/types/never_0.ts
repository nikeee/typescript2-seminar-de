function someVoid(): void {}
function throwFoo(): never {
     throw new Error("Not yet implemented");
}
// Rückgabewert automatisch bestimmt zu "never"
function throwBar() {
    return throwFoo();
}
function infiniteLoop(): never {
    while(true) { }
}
let baz = someVoid(); // void
let bazUnreached0 = infiniteLoop(); // never
let bazUnreached1 = throwBar(); // never