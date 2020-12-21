export function showTextScreen (text: string, occurrencyArray: [string, number][]) {
    const textShowScreen = document.querySelector('#textShowScreen');
    let changedText: string = text;
    textShowScreen!.innerHTML = changedText;
  } 
 