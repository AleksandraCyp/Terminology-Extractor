export function changeAdditionalScreen (inputSelect: HTMLInputElement, examplesList: HTMLCollection) {
    const examples = examplesList;
    const parallelTextArea = document.querySelector('#parallelTextArea') as HTMLInputElement;
    const occurrenciesForm = document.querySelector('#occurrenciesForm') as HTMLElement;
    if (inputSelect.value === 'parallelText') {
      for (let example of examples) {
        (example as HTMLElement).style.display = "none";
      }
      parallelTextArea.style.display = 'initial';
      occurrenciesForm.style.gridColumn = 'span 1';
    } else if (inputSelect.value === 'examples') {
      for (let example of examples) {
        (example as HTMLElement).style.display = "grid"
      } 
      parallelTextArea.style.display = 'none';
      occurrenciesForm.style.gridColumn = 'span 2';
    } 
  }