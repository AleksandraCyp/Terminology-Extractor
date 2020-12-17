import { createTermsArray } from './createTermsArray'

const button = document.querySelector('#createListButton') as HTMLButtonElement;

 button.addEventListener('click', () => {
   createTermsArray('English', 3)   
 })

  