declare module "*!text" {
    const content: string;
    export = content;
}

import text = require("./foo!text");
text.toLowerCase(); // Okay, da text ein String ist
