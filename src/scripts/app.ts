import { getExtractionCheckboxValue } from './getExtractionCheckboxValue'
import { createOneWordTermsArray } from './createOneWordTermsArray'

const button = document.querySelector('#createListButton') as HTMLButtonElement;
const extractionCheckbox = (document.querySelector('#autoextractionCheckbox') as any);

 button.addEventListener('click', () => {
   createOneWordTermsArray('English', 3, getExtractionCheckboxValue(extractionCheckbox)) 
 })











