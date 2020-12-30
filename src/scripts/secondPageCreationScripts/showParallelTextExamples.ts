import { joinIfNextIsLowerCase } from './joinIfNextIsLowerCase';

export function showParallelTextExamples () {
    const parallelTextDiv = document.querySelector('#parallelTextArea')! as HTMLElement;
    const collection = document.getElementsByClassName('term');
    if (parallelTextDiv.querySelector('div')) {
        let parallelTextSplitted = parallelTextDiv.querySelector('div')!.textContent!.split(".");
        parallelTextSplitted = parallelTextSplitted.map(e => e.trim());
        parallelTextSplitted = joinIfNextIsLowerCase(parallelTextSplitted);
        const text = document.querySelector('#textShowScreen')!.textContent;
        let textSplitted = text!.split(".");
        textSplitted = textSplitted.map(e => e.trim());
        textSplitted = joinIfNextIsLowerCase(textSplitted);
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
                parallelExample!.textContent = parallelTextSplitted[currentExample] + ".";
                currentExample = parallelTextSplitted.findIndex(phrase => (phrase + ".").includes(<string>parallelExample!.textContent));
                nextArrow?.addEventListener('click', () => {
                    if (currentExample < parallelTextSplitted.length - 1) {
                        currentExample += 1;
                        parallelExample!.textContent = parallelTextSplitted[currentExample] + ".";
                    } 
                });
                lastArrow?.addEventListener('click', () => {
                    if (currentExample > 0) {
                    currentExample -= 1;
                    parallelExample!.textContent = parallelTextSplitted[currentExample] + ".";
                    }
                });
                term.querySelector('.originalWord')!.addEventListener('change', () => {
                    currentExample = textSplitted.findIndex(phrase => (phrase + ".").includes(example.textContent!));
                    parallelExample!.textContent = parallelTextSplitted[currentExample] + ".";
                });
            } else {
                parallelExample!.textContent = "";
            } 
        }
    } else {
        for (let term of collection) { 
            const parallelExample = term.querySelector('.parallelExampleMain span'); 
            parallelExample!.textContent = "";
        }
    }
}