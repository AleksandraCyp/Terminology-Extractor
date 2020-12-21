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
import { EnglishProhibitedExpressionWords } from './extractionScripts/EnglishProhibitedExpressionWords';
import { createRedundantExpressions } from './extractionScripts/createRedundantExpressions';
import { deleteRedundantExpressions } from './extractionScripts/deleteRedundantExpressions';
import { deleteTerm } from './secondPageCreationScripts/deleteTerm'

export function createSecondScreen (language: string, limitOccurrenciesNr: number, extractOrNo: 'extract' | 'notExtract') {
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

      
   let multipleWordTerms: [string, number][] = [];
   switch (language) {
      case 'English':
         multipleWordTerms = createMultipleTermsArray(EnglishProhibitedExpressionWords, limitOccurrenciesNr)
         break;
      default:  multipleWordTerms = createMultipleTermsArray(EnglishProhibitedExpressionWords, limitOccurrenciesNr);
   }
   /*
   const oneWordTermsPlusMultiple = multipleWordTerms.concat(minimizedOccurrenciesList);
   const oneWordTermsPlusMultipleRedundantWords = createRedundantExpressions(oneWordTermsPlusMultiple);
   const oneWordTermsPlusMultipleRedundant: [string, number][] = deleteRedundantExpressions(oneWordTermsPlusMultiple, oneWordTermsPlusMultipleRedundantWords)
*/
   const minimizedOccurrenciesRedundantWords = createRedundantExpressions(minimizedOccurrenciesList);
   const minimizedOccurrenciesRedundantDel = deleteRedundantExpressions(minimizedOccurrenciesList, minimizedOccurrenciesRedundantWords);
   const multipleRedundantWords = createRedundantExpressions(multipleWordTerms);
   const multipleRedundantWordsDel: [string, number][] = deleteRedundantExpressions(multipleWordTerms, multipleRedundantWords);
   const sortedListOneWord = sortOccurrenciesListByNr(minimizedOccurrenciesRedundantDel);
   const sortedListMultiple = sortOccurrenciesListByNr(multipleRedundantWordsDel);

   const multiplePlusOneWordTerms = sortedListMultiple.concat(sortedListOneWord);
    createNewScreen() 
    showOccurrencyArray(multiplePlusOneWordTerms, text);
    const termsCollection = document.getElementsByClassName('term');
    assingTermIndex(termsCollection);
    showTextScreen(text, multiplePlusOneWordTerms);
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
   newTermListItem.innerHTML = '<input type="text" class="originalWord"><input type="text" class="translatedWord"><div class="deleteTerm"><span>X</span></div><div class="example"><p class="exampleArrow exampleArrowLeft"><<</p><p class="exampleMain"><span><input type="text"></span></p><p class="exampleArrow exampleArrowRight">>></p></div>'
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
   const deleteTermXs = document.getElementsByClassName('deleteTerm');

   [...deleteTermXs].forEach((deleteTermX) => {
      deleteTermX.addEventListener('click', () => {
         deleteTerm(deleteTermX.parentElement!)
      })
   } )
   })

   const deleteTermXs = document.getElementsByClassName('deleteTerm');

   [...deleteTermXs].forEach((deleteTermX) => {
      deleteTermX.addEventListener('click', () => {
         deleteTerm(deleteTermX.parentElement!)
      })
   } )

   const parallelTexButton = document.querySelector('#acceptParallelTextButton');
   parallelTexButton!.addEventListener('click', changeParallelTextArea);

   const downloadButton = document.querySelector('#downloadList');
   downloadButton?.addEventListener('click', () => {
      download("glossary", createGlossaryFile())
   })
}
 