// yet not working

export function showNextLastSingleItem (li: HTMLElement, text: string) {
     const textSplittedInPhrases: any = text.split(".");
     const nextArrow = li.querySelector('.exampleArrowRight');
     const lastArrow = li.querySelector('.exampleArrowLeft');
     const originalWord = li.querySelector('.originalWord') as HTMLInputElement;  
     let examplesArray: string[] = [];
     const example = li.querySelector('.exampleMain span') as HTMLElement;  
     for (let phrase of textSplittedInPhrases) {
        if (phrase.includes(originalWord.value)) {
           if (!examplesArray.includes(phrase.replaceAll(originalWord.value, `<span class="emphasizedWord">${originalWord.value}</span>` ).trim() + ".")) {
              examplesArray.push(phrase.replaceAll(originalWord.value, `<span class="emphasizedWord">${originalWord.value}</span>` ).trim() + ".");
              }
           } 
        } 
    let currentExample = examplesArray.indexOf(example.innerHTML); 
    if (currentExample < 0) {
      examplesArray[0] ? example.innerHTML = examplesArray[0] : example.innerHTML = '<input type="text">'; 
      currentExample = 0;
    } console.log(currentExample); console.log(examplesArray)
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
       example.innerHTML = examplesArray[examplesArray.length - 1] || examplesArray[0];
       } else {
       example.innerHTML = examplesArray[currentExample - 1];  
       }
    })
      
}
 