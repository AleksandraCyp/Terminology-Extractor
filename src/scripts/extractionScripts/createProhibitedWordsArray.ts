export function createProhibitedWordsList (fileUrl: RequestInfo, splitter: string) {
    fetch(fileUrl)
    .then(data => data.text())
    .then(data =>console.log(data.replace(/\r\n|\n|\r/gm, ",").split(splitter)))
};

