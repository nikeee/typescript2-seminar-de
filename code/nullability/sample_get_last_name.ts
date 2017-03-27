function getLastName(name: string | string[]) {
    if(typeof name === "string") {
        // name ist vom Typ "string"
        // .split ist daher eine sichere Operation
        name = name.split(" ");
    }
    // name ist garantiert ein Array
    // Zugriff über den Index ist deshalb zulässig
    return name[name.length - 1] || "";
}
getLastName("Albert Zündorf"); // Zündorf
getLastName(["Kent", "Beck"]); // Beck