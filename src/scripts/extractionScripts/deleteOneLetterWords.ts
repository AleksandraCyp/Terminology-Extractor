export function deleteOneLetterWords (splittedWordsArray: string[]) {
    const moreThenOneWord = [];
    for (let word of splittedWordsArray) {
        if (word.length > 1) {
            moreThenOneWord.push(word);
        }
    } return moreThenOneWord;
}