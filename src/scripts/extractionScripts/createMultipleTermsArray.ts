import { splitText } from '../extractionScripts/splitText'
import { deletePunctuation } from '../extractionScripts/deletePunctuation';
import { createOccurrenciesList } from '../extractionScripts/createOccurrenciesList';
import { limitOccurrenciesTo } from '../extractionScripts/limitOccurrenciesTo';
import { sortOccurrenciesListByNr } from '../extractionScripts/sortOccurrenciesListByNr';
import { deleteProhibitedExpressions } from './deleteProhibitedExpressions';
import { deleteNumbers } from './deleteNumbers';
import { deleteOneLetterWords } from './deleteOneLetterWords';
import { createRedundantExpressions } from './createRedundantExpressions';
import { deleteRedundantExpressions } from './deleteRedundantExpressions';

function deletePunctuationMultiple (splittedWordsArray: string[]): string[] {
    const punctuacionlessText = [];
    for (let word of splittedWordsArray) {
        const punctuationless = word.replace(/[\.,\/#!\[\]\^&\*;:=\_`~@\?><\[\]\+]/g, '');
        const finalWord = punctuationless.replace(/\s{2,}/g," ");
        punctuacionlessText.push(finalWord);
    } return punctuacionlessText
}

function deleteItalianExpressionsStartingWithPreposition (termsArray: [string, number][]) {
    const finalArray: [string, number][] = [];
    for (let term of termsArray) {
        if (term[0].substr(0, 5) !== "dell'" && term[0].substr(0, 5) !== "dall'" && term[0].substr(0, 5) !== "sull'" && term[0].substr(0, 5) !== "nell'" && term[0].substr(0, 5) !== "bell'" && term[0].substr(0, 4) !== "all'" && term[0].substr(0, 6) !== "quest'" && term[0].substr(0, 6) !== "quell'" && term[0].substr(0, 2) !== "l'") {
            finalArray.push(term)
        } else if (term[0].substr(0, 5) === "dell'" || term[0].substr(0, 5) === "dall'" || term[0].substr(0, 5) === "sull'" || term[0].substr(0, 5) === "nell'" || term[0].substr(0, 5) === "bell'") {
            finalArray.push([term[0].substr(5, term[0].length - 1), term[1]]);
        } else if (term[0].substr(0, 4) === "all'") {
            finalArray.push([term[0].substr(4, term[0].length - 1), term[1]]);
        } else if (term[0].substr(0, 6) === "quest'" || term[0].substr(0, 6) === "quell'") {
            finalArray.push([term[0].substr(6, term[0].length - 1), term[1]]);
        } else if (term[0].substr(0, 2) === "l'") {
            finalArray.push([term[0].substr(2, term[0].length - 1), term[1]]);
        }
    } return finalArray;
}

export function createMultipleTermsArray (langProhibitedWordsArray: string[], minNrOccur: number, language: string) {
    const prohibitedWords = langProhibitedWordsArray;
    let text = (document.querySelector("#textImputArea") as HTMLTextAreaElement).value;
    const splittedText = splitText(text, /[\s]+/);
  
    const textNoPunctuation = deletePunctuationMultiple(splittedText);
    
    function createWordPairs (splittedText: string[]) {
        const oneAndNextArray: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]}`
            oneAndNextArray.push(expression);
        } return oneAndNextArray;
    }
    const wordPairs = createWordPairs(textNoPunctuation)
    const wordPairsNoProhibitedWords = deleteProhibitedExpressions(wordPairs, prohibitedWords); 
    const wordParisOccurrencies = createOccurrenciesList(wordPairsNoProhibitedWords);
    const minimizedWordPairsOccurrencies = limitOccurrenciesTo(minNrOccur, wordParisOccurrencies);
    const minWordPairsOccurrenciesSorted = sortOccurrenciesListByNr(minimizedWordPairsOccurrencies)

    function createWord3 (splittedText: string[]) {
        const oneAndNext2: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]}`
            oneAndNext2.push(expression);
        } return oneAndNext2;
    }
    const word3 = createWord3(textNoPunctuation)
    const word3NoProhibitedWords = deleteProhibitedExpressions(word3, prohibitedWords); 
    const word3Occurrencies = createOccurrenciesList(word3NoProhibitedWords);
    const minimizedWord3Occurrencies = limitOccurrenciesTo(minNrOccur, word3Occurrencies);
    const minWord3OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord3Occurrencies);

    function createWord4 (splittedText: string[]) {
        const oneAndNext3: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]} ${splittedText[i+3]}`
            oneAndNext3.push(expression);
        } return oneAndNext3;
    }
    const word4 = createWord4(textNoPunctuation);
    const word4NoProhibitedWords = deleteProhibitedExpressions(word4, prohibitedWords); 
    const word4Occurrencies = createOccurrenciesList(word4NoProhibitedWords);
    const minimizedWord4Occurrencies = limitOccurrenciesTo(minNrOccur, word4Occurrencies);
    const minWord4OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord4Occurrencies);

    function createWord5 (splittedText: string[]) {
        const oneAndNext4: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]} ${splittedText[i+3]} ${splittedText[i+4]}`
            oneAndNext4.push(expression);
        } return oneAndNext4;
    }
    const word5 = createWord5(textNoPunctuation);
    const word5NoProhibitedWords = deleteProhibitedExpressions(word5, prohibitedWords); 
    const word5Occurrencies = createOccurrenciesList(word5NoProhibitedWords);
    const minimizedWord5Occurrencies = limitOccurrenciesTo(minNrOccur, word5Occurrencies);
    const minWord5OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord5Occurrencies);

    function createWord6 (splittedText: string[]) {
        const oneAndNext5: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]} ${splittedText[i+3]} ${splittedText[i+4]} ${splittedText[i+5]}`
            oneAndNext5.push(expression);
        } return oneAndNext5;
    }
    const word6 = createWord6(textNoPunctuation);
    const word6NoProhibitedWords = deleteProhibitedExpressions(word6, prohibitedWords); 
    const word6Occurrencies = createOccurrenciesList(word6NoProhibitedWords);
    const minimizedWord6Occurrencies = limitOccurrenciesTo(minNrOccur, word6Occurrencies);
    const minWord6OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord6Occurrencies);

    function createWord7 (splittedText: string[]) {
        const oneAndNext6: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]} ${splittedText[i+3]} ${splittedText[i+4]} ${splittedText[i+5]} ${splittedText[i+6]}`
            oneAndNext6.push(expression);
        } return oneAndNext6;
    }
    const word7 = createWord7(textNoPunctuation);
    const word7NoProhibitedWords = deleteProhibitedExpressions(word7, prohibitedWords); 
    const word7Occurrencies = createOccurrenciesList(word7NoProhibitedWords);
    const minimizedWord7Occurrencies = limitOccurrenciesTo(minNrOccur, word7Occurrencies);
    const minWord7OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord7Occurrencies);

    function createWord8 (splittedText: string[]) {
        const oneAndNext7: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]} ${splittedText[i+3]} ${splittedText[i+4]} ${splittedText[i+5]} ${splittedText[i+6]} ${splittedText[i+7]}`
            oneAndNext7.push(expression);
        } return oneAndNext7;
    }
    const word8 = createWord8(textNoPunctuation);
    const word8NoProhibitedWords = deleteProhibitedExpressions(word8, prohibitedWords); 
    const word8Occurrencies = createOccurrenciesList(word8NoProhibitedWords);
    const minimizedWord8Occurrencies = limitOccurrenciesTo(minNrOccur, word8Occurrencies);
    const minWord8OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord8Occurrencies);

    
    function createWord9 (splittedText: string[]) {
        const oneAndNext8: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]} ${splittedText[i+3]} ${splittedText[i+4]} ${splittedText[i+5]} ${splittedText[i+6]} ${splittedText[i+7]} ${splittedText[i+8]}`
            oneAndNext8.push(expression);
        } return oneAndNext8;
    }
    const word9 = createWord9(textNoPunctuation);
    const word9NoProhibitedWords = deleteProhibitedExpressions(word9, prohibitedWords); 
    const word9Occurrencies = createOccurrenciesList(word9NoProhibitedWords);
    const minimizedWord9Occurrencies = limitOccurrenciesTo(minNrOccur, word9Occurrencies);
    const minWord9OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord9Occurrencies);

    function createWord10 (splittedText: string[]) {
        const oneAndNext9: string[] = [];
        for (let i = 0; i < splittedText.length; i++) {
            let expression = `${splittedText[i]} ${splittedText[i+1]} ${splittedText[i+2]} ${splittedText[i+3]} ${splittedText[i+4]} ${splittedText[i+5]} ${splittedText[i+6]} ${splittedText[i+7]} ${splittedText[i+8]} ${splittedText[i+9]}`
            oneAndNext9.push(expression);
        } return oneAndNext9;
    }
    const word10 = createWord10(textNoPunctuation);
    const word10NoProhibitedWords = deleteProhibitedExpressions(word10, prohibitedWords); 
    const word10Occurrencies = createOccurrenciesList(word10NoProhibitedWords);
    const minimizedWord10Occurrencies = limitOccurrenciesTo(minNrOccur, word10Occurrencies);
    const minWord10OccurrenciesSorted = sortOccurrenciesListByNr(minimizedWord10Occurrencies);

    const allWordLists = wordPairsNoProhibitedWords.concat(word3NoProhibitedWords, word4NoProhibitedWords, word5NoProhibitedWords, word6NoProhibitedWords, word7NoProhibitedWords, word8NoProhibitedWords, word9NoProhibitedWords, word10NoProhibitedWords);
    const wordAllOccurrencies = createOccurrenciesList(allWordLists);
    let occurrenciesListSpecialLangFeatures: [string, number][];

    switch (language) {
        case 'English':
           occurrenciesListSpecialLangFeatures = wordAllOccurrencies;
           break;
        case 'Italian':
            let occurrenciesListNoInitialPrepositions: [string, number][];
            occurrenciesListNoInitialPrepositions = deleteItalianExpressionsStartingWithPreposition(wordAllOccurrencies);
            occurrenciesListSpecialLangFeatures = occurrenciesListNoInitialPrepositions;
           break;
        default:  occurrenciesListSpecialLangFeatures = wordAllOccurrencies;
     }

    const minimizedWordAllOccurrencies = limitOccurrenciesTo(minNrOccur, occurrenciesListSpecialLangFeatures);
    const minWordAllOccurrenciesSorted = sortOccurrenciesListByNr(minimizedWordAllOccurrencies);

    const redundantExpressions = createRedundantExpressions(minWordAllOccurrenciesSorted);
    const minWordSortedNoRedundant = deleteRedundantExpressions(minWordAllOccurrenciesSorted, redundantExpressions);
    console.log(minWordSortedNoRedundant)
    return minWordSortedNoRedundant;
}

