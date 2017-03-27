type Result<T> = Success<T> | Failure;
// Result<T> hat immer das Attribut success
// Result<T>.success ist vom Typ true | false

declare function tryFoo(): Result<string>;

let bar = tryFoo();
if(bar.success == true) {
    // bar ist vom Typ Success<string>
    console.log(bar.value.toUpperCase());
} else {
    // bar ist vom Typ Failure
    console.error(bar.message);
}
