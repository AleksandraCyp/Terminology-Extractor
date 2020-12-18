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

function createNewScreen () {
   const app = document.querySelector('.app');
   app!.classList.add('secondScreenApp');
   app!.innerHTML = '<div id="textShowScreen"></div><input type="button" value="+" id="addNewTerm"><select id="whichAdditionalScreens" name="whichAdditionalScreen"><option value="examples">show example sentences</option><option value="parallelText">show a parallel text</option></select><form id="occurrenciesForm"><ul class="occurrenciesList" id="occurrenciesListNoTranslation"></ul></form><div class="additionalScreens"></div>';
}

 function showOccurrencyArray (occurrencyArray: [string, number][], text: string) {
   const showList = document.querySelector("#occurrenciesListNoTranslation") as HTMLElement;
   const textSplittedInPhrases = text.split(".");
   let tabIndex = 1;
   for (let word of occurrencyArray) {
      const examplesArray: string[] = [];
      for (let phrase of textSplittedInPhrases) {
         if (phrase.includes(word[0])) {
            examplesArray.push(phrase.replace(word[0], `<span class="emphasizedWord">${word[0]}</span>` ) + ".");
         }
      } 
      showList!.innerHTML += `<li><input type='text' value='${word[0]}' class='originalWord'><input type='text' class='translatedWord'><div class="example"><p class="exampleArrow exampleArrowLeft"><<</p><p class='exampleMain'><span>${examplesArray[0]}</span></p><p class="exampleArrow exampleArrowRight">>></p></div></li>`
      tabIndex++;
   } 
 }

 function showTextScreen (text: string, occurrencyArray: [string, number][]) {
   const textShowScreen = document.querySelector('#textShowScreen');
   let changedText: any = text;
   for (let term of occurrencyArray) {
      changedText = changedText.replaceAll(term[0], `<span class="emphasizedWord">${term[0]}</span>`);
   }  textShowScreen!.innerHTML = changedText;
 } 

 function changeAdditionalScreen (inputSelect: HTMLInputElement, examplesList: HTMLCollection) {
   const examples = examplesList;
   if (inputSelect.value === 'parallelText') {
     for (let example of examples) {
       (example as HTMLElement).style.display = "none"
     }
   } else if (inputSelect.value === 'examples') {
     for (let example of examples) {
       (example as HTMLElement).style.display = "grid"
     } 
   } 
 }

export function createOneWordTermsArray (language: string, limitOccurrenciesNr: number, extractOrNo: 'extract' | 'notExtract') {
   let text = (document.querySelector("#textImputArea") as HTMLTextAreaElement).value; 
   if (extractOrNo === 'extract') {
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
    createNewScreen() 
    showOccurrencyArray(sortedList, text);
    showTextScreen(text, sortedList);
   } else if (extractOrNo === 'notExtract') {
      createNewScreen();
      showTextScreen(text, []);
   }

   const whichAdditionalScreens = (document.querySelector("#whichAdditionalScreens")) as HTMLInputElement;
   const examples = (document.getElementsByClassName('example')) as HTMLCollection;
   changeAdditionalScreen(whichAdditionalScreens, examples);
   whichAdditionalScreens.addEventListener('change', () => {
      changeAdditionalScreen(whichAdditionalScreens, examples);
   })

   const addButton = document.querySelector('#addNewTerm');
   addButton!.addEventListener("click", () => {
   const occurrencies = document.querySelector('#occurrenciesListNoTranslation');
   const newTermListItem = document.createElement('li');
   newTermListItem.innerHTML = '<input type="text" class="originalWord"><input type="text" class="translatedWord"><div class="example"><p class="exampleArrow exampleArrowLeft"><<</p><p class="exampleMain"><span><input type="text"></span></p><p class="exampleArrow exampleArrowRight">>></p></div>'
   occurrencies!.insertBefore(newTermListItem, occurrencies!.firstElementChild);
   changeAdditionalScreen(whichAdditionalScreens, examples);
   })

}
 