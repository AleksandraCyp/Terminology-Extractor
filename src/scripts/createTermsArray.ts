import { splitText } from './extractionScripts/splitText'
import { deletePunctuation } from './extractionScripts/deletePunctuation';
import { deleteOneLetterWords } from './extractionScripts/deleteOneLetterWords';
import { prohibitedEnglishWords } from './extractionScripts/EnglishProhibitedWords'
import { deleteProhibitedWords } from "./extractionScripts/deleteProhibitedWords"
import { createOccurrenciesList } from './extractionScripts/createOccurrenciesList';
import { limitOccurrenciesTo } from './extractionScripts/limitOccurrenciesTo';
import { sortOccurrenciesListByNr } from './extractionScripts/sortOccurrenciesListByNr';
import { sortOccurrenciesListByName } from './extractionScripts/sortOccurrenciesByName'; 

export function createTermsArray (language: string, limitOccurrenciesNr: number) {
    let text = (document.querySelector("#textImputArea") as HTMLTextAreaElement).value;
    const splittedText = splitText(text, /[\s']+/);
    const textNoPunctuation = deletePunctuation(splittedText);
    const oneLetterWordsBan = deleteOneLetterWords(textNoPunctuation);
    let prohibitedWordsBan: string[];
    switch (language) {
       case 'English':
          prohibitedWordsBan = deleteProhibitedWords(oneLetterWordsBan, prohibitedEnglishWords);
          break;
       default: prohibitedWordsBan = deleteProhibitedWords(oneLetterWordsBan, prohibitedEnglishWords);
       break;
    }
    const occurrencyListArray = createOccurrenciesList(prohibitedWordsBan);
    const minimizedOccurrenciesList = limitOccurrenciesTo(limitOccurrenciesNr, occurrencyListArray);
    const sortedList = sortOccurrenciesListByNr(minimizedOccurrenciesList)
    console.log(sortedList);
  }
 