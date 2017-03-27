interface Success<T> {
    success: true; // Expliziter Typ "true"
    value: T;
}
interface Failure {
    success: false; // Expliziter Typ "false"
    message: string;
}
