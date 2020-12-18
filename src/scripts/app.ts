import { createOneWordTermsArray } from './createOneWordTermsArray'

const button = document.querySelector('#createListButton') as HTMLButtonElement;

 button.addEventListener('click', () => {
   createOneWordTermsArray('English', 3) 
 })

  