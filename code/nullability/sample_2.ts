let foo: string | null = bar();
console.log(foo.length); // Fehler!

function bar(): string | null {
    return null; // Jetzt okay
}
let baz: string | null = null; // Jetzt okay
