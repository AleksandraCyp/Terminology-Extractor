import { assingTermIndex } from './assignTermIndex'

export function deleteTerm (liElement: HTMLElement) {
    liElement.parentElement!.removeChild(liElement);
    const termsCollection = document.getElementsByClassName('term');
    assingTermIndex(termsCollection);   
 }
 