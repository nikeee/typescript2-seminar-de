type ReadonlyPoint2 = Readonly<Point2>;
// Typenparameter ersetzen:
type ReadonlyPoint2 = {
    readonly [P in keyof Point2]: Point2[P];
};
// "keyof Point2" auflösen:
type ReadonlyPoint2 = {
    readonly [P in "x" | "y"]: Point2[P];
};
// "in" auflösen, mit P als "Lauftyp":
type ReadonlyPoint2 = {
    readonly "x": Point2["x"];
    readonly "y": Point2["y"];
};
// Lookup-Type (Point2["x"]) auflösen:
type ReadonlyPoint2 = {
    readonly x: number;
    readonly y: number;
};
// Fertig