import { splitText } from './extractionScripts/splitText'

function deletePunctuation (someTextArray: string[]): string[] {
    const punctuacionlessText = [];
    for (let word of someTextArray) {
        const punctuationless = word.replace(/[\.,-\/#!\[\]\"\'\”\„$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
        const finalWord = punctuationless.replace(/\s{2,}/g," ");
        punctuacionlessText.push(finalWord);
    } return punctuacionlessText
}

function deleteOneLetterWords (textWords: string[]): string[] {
    const moreThenOneWord = [];
    for (let word of textWords) {
        if (word.length > 1) {
            moreThenOneWord.push(word);
        }
    } return moreThenOneWord;
}

function createOccurrencyListObject(textArray: string[]) {
    const counts: any = {};
    for (let i = 0; i < textArray.length; i++) {
    const word = textArray[i];
    counts[word] = counts[word] ? counts[word] + 1 : 1;
    } return counts;
}

function convertOccurrencyListToArray (occurrencyList: any): [string, number][] {
    return Object.entries(occurrencyList);
}

function limitOccurenciesTo (minOccurencies: number, occurenciesListArray: [string, number][]) {
    const minimizedArray = [];
    for (let word of occurenciesListArray) {
        if (word[1] >= minOccurencies) {
            minimizedArray.push(word)
        }
    } return minimizedArray;
}

function sortOccurenciesListByNr (occurrencyListArray: [string, number][]) {
   return occurrencyListArray.sort((a, b) => b[1] - a[1]);
} 

function sortOccurenciesListByName (occurrencyListArray: [string, number][]) {
    return occurrencyListArray.sort();
 } 

const button = document.querySelector('#createListButton') as HTMLButtonElement;
 
 button.addEventListener('click', () => {
    let text;
    text = (document.querySelector("#textImputArea") as HTMLTextAreaElement).value;
    const textSplitted = splitText(text);
    const textNoPunctuation = deletePunctuation(textSplitted);
    const oneLetterWords = deleteOneLetterWords(textNoPunctuation);
    const occurrencyList = createOccurrencyListObject(oneLetterWords);
    const occurrencyListArray = convertOccurrencyListToArray(occurrencyList);
    const minimizedOccurrenciesList = limitOccurenciesTo(3, occurrencyListArray);
    console.log(sortOccurenciesListByNr(minimizedOccurrenciesList));
 })

