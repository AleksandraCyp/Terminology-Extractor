export function showNextLastExample (liCollection: HTMLCollection, text: string) {
    const textSplittedInPhrases: any = text.split(".");
    for (let li of liCollection) { 
       const nextArrow = li.querySelector('.exampleArrowRight');
       const lastArrow = li.querySelector('.exampleArrowLeft');
       const originalWord = li.querySelector('.originalWord') as HTMLInputElement;  
       const examplesArray: string[] = [];
       const example = li.querySelector('.exampleMain span') as HTMLElement;  
       for (let phrase of textSplittedInPhrases) {
          if (phrase.includes(originalWord.value)) {
             if (!examplesArray.includes(phrase)) {
                examplesArray.push(phrase.replaceAll(originalWord.value, `<span class="emphasizedWord">${originalWord.value}</span>` ) + ".");
                }
             } 
          } 
            let currentExample = examplesArray.indexOf(example.innerHTML); 
            if (currentExample < 0) {
            example.innerHTML = examplesArray[0]; 
            }
             nextArrow!.addEventListener('click', () => {
             let currentExample = examplesArray.indexOf(example.innerHTML);
             if (currentExample >= examplesArray.length - 1) {
             example.innerHTML = examplesArray[0];
             } else {
             example.innerHTML = examplesArray[currentExample + 1];  
             }
          });
             lastArrow!.addEventListener('click', () => {
             let currentExample = examplesArray.indexOf(example.innerHTML);
             if (currentExample === 0) {
             example.innerHTML = examplesArray[examplesArray.length - 1];
             } else {
             example.innerHTML = examplesArray[currentExample - 1];  
             }
          })
      } 
   }

