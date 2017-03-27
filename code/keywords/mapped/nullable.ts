type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};
type DescriptionOf<T> = {
    [P in keyof T]: string;
};
let pStr: DescriptionOf<Point2> = {
    x: "The x coordinate",
    y: "The y coordinate",
};
