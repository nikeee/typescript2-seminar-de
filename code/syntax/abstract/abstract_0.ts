abstract class Base {
    abstract title: string;
    abstract get value();
    abstract set value(v: number);
}
class DerivedLong extends Base {
    title: string;
    private _value: number;

    get value() { return this._value; }
    set value(v: number) { this._value = v; }

    constructor() {
        super();
        this.title = "Abgeleitet, lange";
        this._value = 42;
    }
}
let dl = new DerivedLong();
dl.value = 23;