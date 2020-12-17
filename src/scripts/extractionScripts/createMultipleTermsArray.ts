import { splitText } from '../extractionScripts/splitText'
import { deletePunctuation } from '../extractionScripts/deletePunctuation';
import { createOccurrenciesList } from '../extractionScripts/createOccurrenciesList';
import { limitOccurrenciesTo } from '../extractionScripts/limitOccurrenciesTo';
import { sortOccurrenciesListByNr } from '../extractionScripts/sortOccurrenciesListByNr';

export function createMultipleTermsArray () {
    let text = (document.querySelector("#textImputArea") as HTMLTextAreaElement).value;
    const splittedText = splitText(text, /[\s’']+/);
    const textNoPunctuation = deletePunctuation(splittedText);

    function createWordPairs (splittedText: string[]) {
        const oneAndNextArray: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]}`
            oneAndNextArray.push(expression);
        } return oneAndNextArray;
    }
    const wordPairs = createWordPairs(textNoPunctuation)
    const wordParisOccurrencies = createOccurrenciesList(wordPairs);
    const minimizedWordPairsOccurrencies = limitOccurrenciesTo(2, wordParisOccurrencies);
    const minWordPairsOccurrenciesSorted = sortOccurrenciesListByNr(minimizedWordPairsOccurrencies)

    function createWord3 (splittedText: string[]) {
        const oneAndNext2: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]}`
            oneAndNext2.push(expression);
        } return oneAndNext2;
    }
    const word3 = createWord3(textNoPunctuation)
    const word3Occurrencies = createOccurrenciesList(word3);
    const minimizedWord3Occurrencies = limitOccurrenciesTo(2, word3Occurrencies);
    const minWord3OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord3Occurrencies);

    function createWord4 (splittedText: string[]) {
        const oneAndNext3: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]}  ${splittedText[i+3]}`
            oneAndNext3.push(expression);
        } return oneAndNext3;
    }
    const word4 = createWord4(textNoPunctuation)
    const word4Occurrencies = createOccurrenciesList(word4);
    const minimizedWord4Occurrencies = limitOccurrenciesTo(2, word4Occurrencies);
    const minWord4OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord4Occurrencies);

    function createWord5 (splittedText: string[]) {
        const oneAndNext4: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]}  ${splittedText[i+3]} ${splittedText[i+4]}`
            oneAndNext4.push(expression);
        } return oneAndNext4;
    }
    const word5 = createWord5(textNoPunctuation)
    const word5Occurrencies = createOccurrenciesList(word5);
    const minimizedWord5Occurrencies = limitOccurrenciesTo(2, word5Occurrencies);
    const minWord5OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord5Occurrencies);

    function createWord6 (splittedText: string[]) {
        const oneAndNext5: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]}  ${splittedText[i+3]} ${splittedText[i+4]} ${splittedText[i+5]}`
            oneAndNext5.push(expression);
        } return oneAndNext5;
    }
    const word6 = createWord6(textNoPunctuation)
    const word6Occurrencies = createOccurrenciesList(word6);
    const minimizedWord6Occurrencies = limitOccurrenciesTo(2, word6Occurrencies);
    const minWord6OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord6Occurrencies);

    function createWord7 (splittedText: string[]) {
        const oneAndNext6: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]}  ${splittedText[i+3]} ${splittedText[i+4]} ${splittedText[i+5]} ${splittedText[i+6]}`
            oneAndNext6.push(expression);
        } return oneAndNext6;
    }
    const word7 = createWord7(textNoPunctuation)
    const word7Occurrencies = createOccurrenciesList(word7);
    const minimizedWord7Occurrencies = limitOccurrenciesTo(2, word7Occurrencies);
    const minWord7OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord7Occurrencies);

    function createWord8 (splittedText: string[]) {
        const oneAndNext7: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]}  ${splittedText[i+3]} ${splittedText[i+4]} ${splittedText[i+5]} ${splittedText[i+6]} ${splittedText[i+7]}`
            oneAndNext7.push(expression);
        } return oneAndNext7;
    }
    const word8 = createWord8(textNoPunctuation)
    const word8Occurrencies = createOccurrenciesList(word8);
    const minimizedWord8Occurrencies = limitOccurrenciesTo(2, word8Occurrencies);
    const minWord8OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord8Occurrencies);

    
    function createWord9 (splittedText: string[]) {
        const oneAndNext8: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]}  ${splittedText[i+3]} ${splittedText[i+4]} ${splittedText[i+5]} ${splittedText[i+6]} ${splittedText[i+7]} ${splittedText[i+8]}`
            oneAndNext8.push(expression);
        } return oneAndNext8;
    }
    const word9 = createWord8(textNoPunctuation)
    const word9Occurrencies = createOccurrenciesList(word9);
    const minimizedWord9Occurrencies = limitOccurrenciesTo(2, word9Occurrencies);
    const minWord9OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord9Occurrencies);

    function createWord10 (splittedText: string[]) {
        const oneAndNext9: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]}  ${splittedText[i+3]} ${splittedText[i+4]} ${splittedText[i+5]} ${splittedText[i+6]} ${splittedText[i+7]} ${splittedText[i+8]} ${splittedText[i+9]}`
            oneAndNext9.push(expression);
        } return oneAndNext9;
    }
    const word10 = createWord10(textNoPunctuation)
    const word10Occurrencies = createOccurrenciesList(word10);
    const minimizedWord10Occurrencies = limitOccurrenciesTo(2, word10Occurrencies);
    const minWord10OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord10Occurrencies);
    
    const allWordLists = wordPairs.concat(word3, word4, word5, word6, word7, word8, word9, word10)
    const wordAllOccurrencies = createOccurrenciesList(allWordLists);
    const minimizedWordAllOccurrencies = limitOccurrenciesTo(3, wordAllOccurrencies);
    const minWordAllOccurrenciesSorted = sortOccurrenciesListByNr(minimizedWordAllOccurrencies);

    console.log(minimizedWordAllOccurrencies)
}

