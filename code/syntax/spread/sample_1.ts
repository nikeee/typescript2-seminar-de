interface Options {
    book?: string;
    pageStart?: number;
    pageCount?: number;
}
const defaults = {
    book: "TypeScript Handbook",
    pageCount: 1,
};
function getPages(options: Options) {
    const finalOptions = { ...defaults, ...options};
    console.dir(finalOptions);
    finalOptions.book; // "Dragon Book"
    finalOptions.pageStart; // 23
    finalOptions.pageCount; // 1
}
getPages({
    book: "Dragon Book",
    pageStart: 23,
});
