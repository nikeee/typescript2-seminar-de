var obj = {
    foo: 42,
    bar: 24,
}; // { foo: 42, bar: 24 }
var arr = [13, 37,]; // [13, 37]
arr.length; // 2

// optinales trailing-comma
// ...in Argumentliste
function foo(a, b, c,) { }
// ...bei Übbergabeparametern
foo(a, b, c,);

// ...bei Enums
enum Colors {
    RED,
    GREEN,
    BLUE,
}
