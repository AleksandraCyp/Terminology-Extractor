export function createOccurrenciesList(splittedWordsArray: string[]): ['string', number][] {
    const occurrenciesMap = new Map();
    for (let word of splittedWordsArray) {
        if (occurrenciesMap.has(word)) {
            occurrenciesMap.set(word, occurrenciesMap.get(word) + 1);  
        } else {
            occurrenciesMap.set(word, 1);
        }
    } return Array.from(occurrenciesMap);
} 

