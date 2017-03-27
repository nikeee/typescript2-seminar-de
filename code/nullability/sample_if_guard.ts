let foo: string | null = bar();
if(foo !== null) {
    // foo hat jetzt nur den Typen "string",
    // da "null" ausgeschlossen wurde
    console.log(foo.length); // Jetzt okay
}
