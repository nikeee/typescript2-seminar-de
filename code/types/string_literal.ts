type Greeting = "Hi" | "Hey" | "Hello";
function sayHello(greeting: Greeing, name: string) {
    return greeting + " " + name;
}

sayHello("Hi", "Kent"); // Okay
sayHello("Bye", "Kent"); // Fehler
