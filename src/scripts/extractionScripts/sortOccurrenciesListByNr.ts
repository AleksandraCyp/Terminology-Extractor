export function sortOccurrenciesListByNr (occurrencyListArray: [string, number][]) {
    return occurrencyListArray.sort((a, b) => b[1] - a[1]);
 } 
 