function clamp(
    v: number, min: number, max?: number) {
    if (v < max) // Fehler, max könnte undefined sein
        return v > min ? v : min;
    return max;
}
clamp(12, 0, 10); // Alles okay
clamp(12, 0); // Würde 12 mit undefined vergleichen