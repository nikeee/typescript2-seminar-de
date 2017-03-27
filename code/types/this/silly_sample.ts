class Foo {
    answer: number;
    printAnswer(this: void) {
        // this ist hier void, obwohl
        // es eine Instanzfunktion ist
        console.log(this.answer);
        // -> Fehler, "void" hat kein "answer"
    }
}
class Bar {
    printSomething(this: Foo) {
        // this ist hier vom Typ "Foo"
        console.log(this.answer);
        // -> Okay, da this ein "Foo" ist.
    }
}

let b = new Bar();
b.printSomething();
// -> Fehler, da b von Typ "Bar" ist.
// Mögliche Lösung:
let f = new Foo();
b.printSomething.apply(f);
// Ruft b.printSomething mit f als "this" auf.
// (wird momentan nicht vom Type-Checker überprüft)