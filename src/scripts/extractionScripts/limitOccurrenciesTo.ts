export function limitOccurrenciesTo (minOccurencies: number, occurenciesListArray: [string, number][]) {
    const minimizedArray = [];
    for (let word of occurenciesListArray) {
        if (word[1] >= minOccurencies) {
            minimizedArray.push(word)
        }
    } return minimizedArray;
}
