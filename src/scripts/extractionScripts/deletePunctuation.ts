export function deletePunctuation (splittedWordsArray: string[]): string[] {
    const punctuacionlessText = [];
    for (let word of splittedWordsArray) {
        const punctuationless = word.replace(/[\.,\#!\[\]\"\'\”\„$%\^&\*;:{}=\_`~()@\+\?><\[\]\+]/g, '');
        const finalWord = punctuationless.replace(/\s{2,}/g," ");
        punctuacionlessText.push(finalWord);
    } return punctuacionlessText
}