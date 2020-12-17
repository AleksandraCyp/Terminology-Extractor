export function deleteProhibitedWords (splittedText: string[], prohibitedWordsArray: string[]): string[] {
    const noProhibitedWordsArray = [];
    for (let word of splittedText) {
        const wordUpperCase = word.toUpperCase();
        const wordLowerCase = word.toLowerCase();
        const wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1, (word.length));
        if (!(prohibitedWordsArray.includes(word) || prohibitedWordsArray.includes(wordUpperCase) || prohibitedWordsArray.includes(wordLowerCase) || prohibitedWordsArray.includes(wordCapitalized))) {
            noProhibitedWordsArray.push(word)
        }
    } return noProhibitedWordsArray
}