var foo = "Hello"; // foo ist vom Typ string
let bar = "World"; // bar ist vom Typ string
const baz = "Hello!" // bar ist vom Typ "Hello!"
const PORT = 443; // PORT ist vom Typ 443

bar = "Moon";
// -> Okay, da bar nicht konstant und vom Typ string
baz = "Bye!";
// -> Fehler, da baz konstant und vom Typ "Hello!" ist