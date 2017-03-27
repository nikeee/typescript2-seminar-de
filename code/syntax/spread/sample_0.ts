let person = {
    name: "Anders",
    age: 42,
    github: "ahejlsberg"
};
// Spread kopiert alle Werte in ein anderes Objekt
let copy = { ...person };
copy.name; // "Anders"
copy.age; // 42
// ...
