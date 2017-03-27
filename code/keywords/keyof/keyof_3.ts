function getProp2<TObj, TKey extends keyof TObj>
    (obj: TObj, key: TKey) {
    return obj[key];
    // Rückgabewert entspricht TObj[TKey]
    // Für ColorVector also
    // ColorVector[keyof ColorVector]
}

const bar = getProp2(redArrow, "x");
// bar hat Typ number
const baz = getProp2(redArrow, "color");
// baz hat Typ string
