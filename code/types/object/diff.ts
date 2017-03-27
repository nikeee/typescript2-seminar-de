declare function foo(v: object): void;
declare function bar(v: {}): void;
declare function baz(v: Object): void;

foo(false); // Fehler
bar(false); // Okay
baz(false); // Okay

foo("str"); // Fehler
bar("str"); // Okay
baz("str"); // Okay

foo({}); // Okay
bar({}); // Okay
baz({}); // Okay