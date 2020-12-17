import { splitText } from './extractionScripts/splitText'
import { deletePunctuation } from './extractionScripts/deletePunctuation';
import { deleteOneLetterWords } from './extractionScripts/deleteOneLetterWords';
import { deleteNumbers } from './extractionScripts/deleteNumbers'
import { deleteDoublets } from './extractionScripts/deleteDoublets'
import { deleteEnglishPlurals } from './extractionScripts/deletePlurals'
import { prohibitedEnglishWords } from './extractionScripts/EnglishProhibitedWords'
import { deleteProhibitedWords } from "./extractionScripts/deleteProhibitedWords"
import { createOccurrenciesList } from './extractionScripts/createOccurrenciesList';
import { limitOccurrenciesTo } from './extractionScripts/limitOccurrenciesTo';
import { sortOccurrenciesListByNr } from './extractionScripts/sortOccurrenciesListByNr';
import { sortOccurrenciesListByName } from './extractionScripts/sortOccurrenciesByName'; 
import { createMultipleTermsArray } from './extractionScripts/createMultipleTermsArray'

export function createOneWordTermsArray (language: string, limitOccurrenciesNr: number) {
    let text = (document.querySelector("#textImputArea") as HTMLTextAreaElement).value;
    const splittedText = splitText(text, /[\s’']+/);
    const textNoPunctuation = deletePunctuation(splittedText);
    const oneLetterWordsBan = deleteOneLetterWords(textNoPunctuation);
    const numbersBan = deleteNumbers(oneLetterWordsBan)
    const textNoDoublets = deleteDoublets(numbersBan);
    let textNoPlurals: string[] = [];
    switch (language) {
      case 'English':
         textNoPlurals = deleteEnglishPlurals(textNoDoublets);
         break;
      default: textNoPlurals = deleteEnglishPlurals(textNoDoublets);
      break;
   }
    let prohibitedWordsBan: string[];
    switch (language) {
       case 'English':
          prohibitedWordsBan = deleteProhibitedWords(textNoPlurals, prohibitedEnglishWords);
          break;
       default: prohibitedWordsBan = deleteProhibitedWords(textNoPlurals, prohibitedEnglishWords);
       break;
    }
    const occurrencyListArray = createOccurrenciesList(prohibitedWordsBan);
    const minimizedOccurrenciesList = limitOccurrenciesTo(limitOccurrenciesNr, occurrencyListArray);
    const sortedList = sortOccurrenciesListByNr(minimizedOccurrenciesList)

    function showOccurrencyArray (occurrencyArray: [string, number][]) {
      const app = document.querySelector('.app');
      app!.innerHTML = '<ul class="occurrenciesList" id="occurrenciesListNoTranslation"></ul>';
      const showList = document.querySelector("#occurrenciesListNoTranslation");
      for (let word of occurrencyArray) {
         showList!.innerHTML += `<li>${word[0]}</li>`
      } 
    }
   showOccurrencyArray(sortedList);
  }
 