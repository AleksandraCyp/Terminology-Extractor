export function createGlossaryFile () {
    const termsCollection = document.getElementsByClassName('term');
    let textToExport: string = '';
    for (let term of termsCollection) {
    const originalWord = (term.querySelector('.originalWord')! as HTMLInputElement).value;
    const translatedWord = (term.querySelector('.translatedWord')! as HTMLInputElement).value;
    if (originalWord.trim() !== "" && translatedWord.trim() !== "") {
       textToExport += `${originalWord}\t${translatedWord?.replace(' / ', "\t")}\n` 
      } 
    }  
    const textSplitted = textToExport.split('\n');
    const textSorted = textSplitted.sort();
    let textToExportSorted: string = '';
    for (let term of textSorted) {
       textToExportSorted += `${term}\n`
    }
    return textToExportSorted;
 }