import { splitText } from './extractionScripts/splitText'
import { deletePunctuation } from './extractionScripts/deletePunctuation';
import { deleteOneLetterWords } from './extractionScripts/deleteOneLetterWords';
import { createProhibitedWordsList } from './extractionScripts/createProhibitedWordsArray';
import { createOccurrenciesList } from './extractionScripts/createOccurrenciesList';
import { limitOccurrenciesTo } from './extractionScripts/limitOccurrenciesTo';
import { sortOccurrenciesListByNr } from './extractionScripts/sortOccurrenciesListByNr';
import { sortOccurrenciesListByName } from './extractionScripts/sortOccurrenciesByName'; 


const prohibitedEnglishVerbs = createProhibitedWordsList('../src/text/mostCommonEnglishVerbs.txt', ',')

/*
function createOccurrencyListObject(textArray: string[]) {
    const counts: any = {};
    for (let i = 0; i < textArray.length; i++) {
    const word = textArray[i];
    counts[word] = counts[word] ? counts[word] + 1 : 1;
    } return counts;
}

function convertOccurrencyListToArray (occurrencyList: any): [string, number][] {
    return Object.entries(occurrencyList);
} */


const button = document.querySelector('#createListButton') as HTMLButtonElement;
 
 button.addEventListener('click', () => {
    let text;
    text = (document.querySelector("#textImputArea") as HTMLTextAreaElement).value;
    const textToShow = splitText(text);
    const textNoPunctuation = deletePunctuation(textToShow);
    const oneLetterWords = deleteOneLetterWords(textNoPunctuation);
    const occurrencyListArray = createOccurrenciesList(oneLetterWords);
    const minimizedOccurrenciesList = limitOccurrenciesTo(3, occurrencyListArray);
    console.log(sortOccurrenciesListByNr(minimizedOccurrenciesList));
 })

