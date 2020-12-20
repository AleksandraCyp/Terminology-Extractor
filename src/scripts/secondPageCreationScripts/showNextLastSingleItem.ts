// yet not working

export function showNextLastSingleItem (inputElement: HTMLInputElement, text: string) {
   const textSplittedInPhrases: any = text.split(".");
   let originalWord = inputElement.value;
   const examplesArray: string[] = [];
   const example = inputElement.parentElement!.querySelector('.exampleMain span') as HTMLInputElement;
   const nextArrow = inputElement.parentElement!.querySelector('.exampleArrowRight') as HTMLInputElement;
   const lastArrow = inputElement.parentElement!.querySelector('.exampleArrowLeft') as HTMLInputElement;

   for (let phrase of textSplittedInPhrases) {
      if (phrase.includes(originalWord)) {
         if (!examplesArray.includes(phrase.replaceAll(originalWord, `<span class="emphasizedWord">${originalWord}</span>` ).trim() + ".")) {
            examplesArray.push(phrase.replaceAll(originalWord, `<span class="emphasizedWord">${originalWord}</span>` ).trim() + ".");
            }
         } 
      }  console.log(examplesArray)
       
      function getCurrentExample () {
         return examplesArray.indexOf(example.innerHTML)
      };

      let currentExample = getCurrentExample()
            if (currentExample < 0) {
            examplesArray[0] ? example.innerHTML = examplesArray[0] : example.innerHTML = '<input type="text">'; 
            currentExample = getCurrentExample()
            console.log(currentExample)
            }
            nextArrow!.addEventListener('click', () => {
               let currentExample = examplesArray.indexOf(example.innerHTML);
               if (examplesArray.length > 1) {
                    if (currentExample >= examplesArray.length - 1) {
                 example.innerHTML = examplesArray[0];
              
                 } else {
                 example.innerHTML = examplesArray[currentExample + 1];  
                 
               }
               }
            });
               lastArrow!.addEventListener('click', () => {
               let currentExample = examplesArray.indexOf(example.innerHTML);
               if (examplesArray.length > 1) {
                 if (currentExample === 0) {
                 example.innerHTML = examplesArray[examplesArray.length - 1] || examplesArray[0];
                 
                 } else {
                 example.innerHTML = examplesArray[currentExample - 1];  
                
               }  
               }
            })
}  

 