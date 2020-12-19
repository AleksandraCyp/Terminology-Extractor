import { getExtractionCheckboxValue } from './getExtractionCheckboxValue'
import { createOneWordTermsArray } from './createOneWordTermsArray'

const button = document.querySelector('#createListButton') as HTMLButtonElement;
const extractionCheckbox = (document.querySelector('#autoextractionCheckbox') as any);
let extractionCheckboxValue = getExtractionCheckboxValue(extractionCheckbox);
const selectLanguage = (document.querySelector('#selectLanguage')! as HTMLSelectElement);
const minimalNumberInput = document.querySelector('#minNumOfOccurrencies')! as HTMLInputElement;
let minimalNubmerValue: number = +(minimalNumberInput.value);

minimalNumberInput.addEventListener('input', () => {
  minimalNubmerValue = +(minimalNumberInput.value);
}
);

extractionCheckbox.addEventListener('input', () => {
  extractionCheckboxValue = getExtractionCheckboxValue(extractionCheckbox);
  } 
);

 button.addEventListener('click', () => {
   createOneWordTermsArray(selectLanguage.value, minimalNubmerValue, extractionCheckboxValue) 
 })






