type Callback = (this: void, e: Event) => void
interface UIElement {
    addListener(onEvent: Callback): void;
}
class Handler {
    info: string;
    onEvent(this: Handler, e: Event) {
        // "this" wird hier verwendet
        // hier würde es zum Laufzeitfehler kommen
        this.info = e.type;
    }
}

declare let uiElement: UIElement;
let h = new Handler();
uiElement.addListener(h.onEvent);
// -> Fehler, da h.onEvent einen anderen
// this-Typen hat ("Handler" statt "void")
// Callback-Aufruf ändert die this-Referenz des
// Funktionsverweises
uiElement.addListener(e => h.onEvent(e));
//->  Okay, da this-Typen kompatibel