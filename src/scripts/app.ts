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


fetch("https://cors-anywhere.herokuapp.com/" + 'https://glosbe.com/gapi/translate?from=pol&dest=eng&format=json&phrase=witaj&pretty=true:[https://glosbe.com/gapi/translate?from=pol&dest=eng&format=json&phrase=matka&pretty=true]')
.then(data => data.json())
.then(data => console.log(data))






