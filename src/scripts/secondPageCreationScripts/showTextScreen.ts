export function showTextScreen (text: string, occurrencyArray: [string, number][]) {
    const textShowScreen = document.querySelector('#textShowScreen');
    let changedText: any = text;
    for (let term of occurrencyArray) {
       changedText = changedText.replaceAll(term[0], `<span class="emphasizedWord">${term[0]}</span>`);
    }  textShowScreen!.innerHTML = changedText;
  } 
 