export function deleteRedundantExpressions (expressionArrayWithOccurrencies: [string, number][], redundandExp: string[]) {
    const arrayNoRedundant: [string, number][] = [];
    for (let expresssion of expressionArrayWithOccurrencies) {
        if (!redundandExp.includes(expresssion[0])) {
            arrayNoRedundant.push(expresssion);
        }
    } return arrayNoRedundant;
}