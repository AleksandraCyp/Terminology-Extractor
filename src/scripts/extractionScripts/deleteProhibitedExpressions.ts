export function deleteProhibitedExpressions (splittedText: string[], prohibitedWordsArray: string[]): string[] {
    const noProhibitedWordsArray = [];
    for (let exp of splittedText) {
        const splittedExp: string[] = exp.split(' ');
        const firstWordUpperCase = splittedExp[0].toUpperCase();
        const fistWordLowerCase = splittedExp[0].toLowerCase();
        const firstWordCapitalized = splittedExp[0].charAt(0).toUpperCase() + splittedExp[0].slice(1, (splittedExp[0].length));
        const lastWordUpperCase = splittedExp[splittedExp.length - 1].toUpperCase();
        const lastWordLowerCase = splittedExp[splittedExp.length - 1].toLowerCase();
        const lastWordCapitalized = splittedExp[splittedExp.length - 1].charAt(0).toUpperCase() + splittedExp[splittedExp.length - 1].slice(1, (splittedExp[splittedExp.length - 1].length));
        if (!(prohibitedWordsArray.includes(firstWordUpperCase) || prohibitedWordsArray.includes(fistWordLowerCase) || prohibitedWordsArray.includes(firstWordCapitalized) || prohibitedWordsArray.includes(lastWordCapitalized) || prohibitedWordsArray.includes(lastWordLowerCase) || prohibitedWordsArray.includes(lastWordUpperCase) || prohibitedWordsArray.includes(lastWordUpperCase))) {
            noProhibitedWordsArray.push(exp)
        }
    } return noProhibitedWordsArray
}

