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
import { createMultipleTermsArray } from './extractionScripts/createMultipleTermsArray';
import { createNewScreen } from './secondPageCreationScripts/createNewScreen';
import { showOccurrencyArray } from './secondPageCreationScripts/showOccurrencyArray';
import { showTextScreen } from './secondPageCreationScripts/showTextScreen';
import { changeAdditionalScreen } from './secondPageCreationScripts/changeAdditionalScreen';
import { download } from './secondPageCreationScripts/download';
import { assingTermIndex } from './secondPageCreationScripts/assignTermIndex';
import { createGlossaryFile } from './secondPageCreationScripts/createGlossaryFile';
import { changeParallelTextArea } from './secondPageCreationScripts/changeParallelTextArea';
import { showNextLastExample } from './secondPageCreationScripts/showNextLastExample';
import { showNextLastSingleItem } from './secondPageCreationScripts/showNextLastSingleItem'
import { EnglishProhibitedExpressionWords } from './extractionScripts/EnglishProhibitedExpressionWords'

export function createOneWordTermsArray (language: string, limitOccurrenciesNr: number, extractOrNo: 'extract' | 'notExtract') {
   let text = (document.querySelector("#textImputArea") as HTMLTextAreaElement).value; 
   /* experiment start */
   switch (language) {
      case 'English':
         createMultipleTermsArray(EnglishProhibitedExpressionWords, limitOccurrenciesNr)
         break;
      default: createMultipleTermsArray(EnglishProhibitedExpressionWords, limitOccurrenciesNr);
}
      /* experiment end */
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
   }
      let prohibitedWordsBan: string[];
      switch (language) {
         case 'English':
             prohibitedWordsBan = deleteProhibitedWords(textNoPlurals, prohibitedEnglishWords);
             break;
         default: prohibitedWordsBan = deleteProhibitedWords(textNoPlurals, prohibitedEnglishWords);
      }
    const occurrencyListArray = createOccurrenciesList(prohibitedWordsBan);
    const minimizedOccurrenciesList = limitOccurrenciesTo(limitOccurrenciesNr, occurrencyListArray);
    const sortedList = sortOccurrenciesListByNr(minimizedOccurrenciesList)
    createNewScreen() 
    showOccurrencyArray(sortedList, text);
    const termsCollection = document.getElementsByClassName('term');
    assingTermIndex(termsCollection);
    showTextScreen(text, sortedList);
   } else if (extractOrNo === 'notExtract') {
      createNewScreen();
      showTextScreen(text, []);
   }
   
   const liTermsCollection = document.getElementsByTagName('li');
   showNextLastExample(liTermsCollection, text);
   const originalWordInputs = document.getElementsByClassName('originalWord');
   [...originalWordInputs].forEach((input) => {
      input.addEventListener('change', () => {
         showNextLastExample(liTermsCollection, text)
      })
   })

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
   newTermListItem.setAttribute('class', 'term')
   newTermListItem.innerHTML = '<input type="text" class="originalWord"><input type="text" class="translatedWord"><div class="example"><p class="exampleArrow exampleArrowLeft"><<</p><p class="exampleMain"><span><input type="text"></span></p><p class="exampleArrow exampleArrowRight">>></p></div>'
   occurrencies!.insertBefore(newTermListItem, occurrencies!.firstElementChild);
   changeAdditionalScreen(whichAdditionalScreens, examples);
   const termsCollection = document.getElementsByClassName('term');
   assingTermIndex(termsCollection);
   const originalWordInputs = document.getElementsByClassName('originalWord');
   [...originalWordInputs].forEach((input) => {
      input.addEventListener('change', () => {
         showNextLastExample(liTermsCollection, text)
      })
   })
   })

   const parallelTexButton = document.querySelector('#acceptParallelTextButton');
   parallelTexButton!.addEventListener('click', changeParallelTextArea);

   const downloadButton = document.querySelector('#downloadList');
   downloadButton?.addEventListener('click', () => {
      download("glossary", createGlossaryFile())
   })
}
 