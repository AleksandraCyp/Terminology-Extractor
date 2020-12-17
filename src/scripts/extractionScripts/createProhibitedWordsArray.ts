export function createprohibitedWordsArray (arrayOfProhibitedWords: string[][]) {
    let prohibitedWordsFinal: string[] = [];
    for (let array = 0; array < arrayOfProhibitedWords.length; array++) {
        prohibitedWordsFinal = prohibitedWordsFinal.concat(arrayOfProhibitedWords[array])
    }
    return prohibitedWordsFinal;
 }
