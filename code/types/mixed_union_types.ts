declare function bar(): Boolish;

type Boolish = boolean | 0 | 1 | null;
let foo: Boolish = bar();
if(foo) {
    // foo ist vom Typ 1 | true
} else if(foo === 0) {
    // foo ist vom Typ und Wert 0
} else {
    // foo ist vom Typ false | null
}
