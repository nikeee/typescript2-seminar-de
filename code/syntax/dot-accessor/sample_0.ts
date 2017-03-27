interface Dictionary<T> {
    [key: string]: T;
}
let foo: Dictionary<number> = {
    "bar": 42,
};
foo["bar"] = 43; // Okay
foo.bar = 44; // Okay
foo.baz = 1337; // Okay
