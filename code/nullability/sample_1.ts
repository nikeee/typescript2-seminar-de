let foo: string = bar();
console.log(foo.length);

function bar(): string {
    return null; // Fehler
}
let baz: string = null; // Fehler
