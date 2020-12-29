export function showParallelTextExamples () {
    const parallelTextDiv = document.querySelector('#parallelTextArea')! as HTMLElement;
    const collection = document.getElementsByClassName('term');
    if (parallelTextDiv.querySelector('div')) {
        const parallelTextSplitted = parallelTextDiv.querySelector('div')!.innerHTML!.split(".");
        const text = document.querySelector('#textShowScreen')!.innerHTML;
        const textSplitted = text.split(".");
        for (let term of collection) {
            let currentExample: number = -1;
            const example = term.querySelector('.exampleMain span')!;
            const parallelExample = term.querySelector('.parallelExampleMain span'); 
            const nextArrow = term.querySelector('.parallelExampleArrowRight');
            const lastArrow = term.querySelector('.parallelExampleArrowLeft');
            if (currentExample < 0) {
                currentExample = textSplitted.findIndex(phrase => (phrase + ".").includes(example.textContent!));
            }
            if (parallelTextSplitted[currentExample]) {
                parallelExample!.innerHTML = parallelTextSplitted[currentExample];
                currentExample = parallelTextSplitted.findIndex(phrase => (phrase + ".").includes(parallelExample!.innerHTML));
                nextArrow?.addEventListener('click', () => {
                    if (currentExample < parallelTextSplitted.length - 2) {
                        currentExample += 1;
                        parallelExample!.innerHTML = parallelTextSplitted[currentExample] + ".";
                    } 
                });
                lastArrow?.addEventListener('click', () => {
                    if (currentExample > 0) {
                    currentExample -= 1;
                    parallelExample!.innerHTML = parallelTextSplitted[currentExample] + ".";
                    }
                });
                term.querySelector('.originalWord')!.addEventListener('change', () => {
                    currentExample = textSplitted.findIndex(phrase => (phrase + ".").includes(example.textContent!));
                    parallelExample!.innerHTML = parallelTextSplitted[currentExample] + ".";
                });
            } else {
                parallelExample!.innerHTML = "";
            } 
        }
    } else {
        for (let term of collection) { 
            const parallelExample = term.querySelector('.parallelExampleMain span'); 
            parallelExample!.innerHTML = "";
        }
    }
}