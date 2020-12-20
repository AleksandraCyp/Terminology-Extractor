export function showOccurrencyArray (occurrencyArray: [string, number][], text: string) {
    const showList = document.querySelector("#occurrenciesListNoTranslation") as HTMLElement;
    const textSplittedInPhrases: any = text.split(".");
    for (let word of occurrencyArray) {
       const examplesArray: string[] = [];
       for (let phrase of textSplittedInPhrases) {
          if (phrase.includes(word[0])) {
             examplesArray.push(phrase.replaceAll(word[0], `<span class="emphasizedWord">${word[0]}</span>` ) + ".");
          }
       } 
       showList!.innerHTML += `<li class='term'><input type='text' value='${word[0]}' class='originalWord'><input type='text' class='translatedWord'><div class="deleteTerm"><span>X</span></div><div class="example"><p class="exampleArrow exampleArrowLeft"><<</p><p class='exampleMain'><span>${examplesArray[0]}</span></p><p class="exampleArrow exampleArrowRight">>></p></div></li>`  
      } 
  }
