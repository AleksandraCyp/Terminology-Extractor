   import { showParallelTextExamples } from './showParallelTextExamples';
   
   export function changeParallelTextArea () {
    const parallelTextDiv = document.querySelector('#parallelTextArea')! as HTMLElement;
    if (parallelTextDiv.lastElementChild!.tagName === 'TEXTAREA') {
       const parallelText = (parallelTextDiv.querySelector('textarea') as HTMLTextAreaElement).value;
       parallelTextDiv.innerHTML = `<input type="button" value="accept" id="acceptParallelTextButton"><div>${parallelText}</div>`
       parallelTextDiv.style.position = 'sticky';
       parallelTextDiv.style.top = '0';
       parallelTextDiv.style.minHeight = 'auto';
       parallelTextDiv.style.maxHeight = 'calc(100vh - 80px)';
       (parallelTextDiv.querySelector('input[type="button"]')! as HTMLButtonElement).value = 'change parallel text'
       const parallelTexButton = document.querySelector('#acceptParallelTextButton');
       parallelTexButton!.addEventListener('click', changeParallelTextArea);
       showParallelTextExamples()
    } else if (parallelTextDiv.lastElementChild!.tagName === 'DIV'){
       parallelTextDiv.innerHTML = `<input type="button" value="accept" id="acceptParallelTextButton"><textarea></textarea>`;
       const parallelTexButton = document.querySelector('#acceptParallelTextButton');
       parallelTexButton!.addEventListener('click', changeParallelTextArea);       
       showParallelTextExamples()
    }
 }
 