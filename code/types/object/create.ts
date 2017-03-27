declare function create(o: object | null): any;
create({ attr: 0 }); // Okay
create(null); // Okay
create(42); // Fehler
create("Anders"); // Fehler
create(true); // Fehler
create(undefined); // Fehler (mit strictNullChecks)