export function showOccurrencyArray (occurrencyArray: [string, number][]) {
    const showList = document.querySelector("#occurrenciesListNoTranslation") as HTMLElement;
    for (let word of occurrencyArray) {
       showList!.innerHTML += `<li class='term'><input type='text' value="${word[0]}" class='originalWord'><input type='text' class='translatedWord'><div class="deleteTerm"><span>x</span></div><div class="example"><p class="exampleArrow exampleArrowLeft"><<</p><p class='exampleMain'><span></span></p><p class="exampleArrow exampleArrowRight">>></p></div></li>`  
      } 
  }
