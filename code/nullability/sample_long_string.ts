let longString: string;
for(let str of strings) {
    if(str.length > 42) {
        longString = str;
    }
}

// Fehler, da nicht gesichert ist,
// dass longString zugewiesen wurde.
console.log(longString.length);
