export function deleteItalianPlurals (splittedText: string[]) {
    const arrayNoPlurals: string[] = []
    for (let word of splittedText) {
        if (word[word.length - 1] !== 'i' && word[word.length - 1] !== 'e') {
            arrayNoPlurals.push(word);
        } else {
            if (word[word.length - 1] === 'i' && splittedText.includes(word.substr(0, word.length - 1) + 'o')) {
                arrayNoPlurals.push(word.substr(0, word.length - 1) + 'o');
            } else if (word[word.length - 1] === 'i' && splittedText.includes(word + 'o')) {
                arrayNoPlurals.push(word + 'o');
            } else if (word[word.length - 1] === 'i' && (word[word.length - 2] === 'c' || word[word.length - 2] === 'g') && splittedText.includes(word + 'o')) {
                arrayNoPlurals.push(word + 'o');
            } else if (word[word.length - 1] === 'i' && word[word.length - 2] === 'h' && (word[word.length - 3] === 'c' || word[word.length - 3] === 'g') && splittedText.includes(word.substr(0, word.length - 2) + 'o')) {
                arrayNoPlurals.push(word.substr(0, word.length - 2) + 'o');
            } else if (word[word.length - 1] === 'i' && splittedText.includes(word.substr(0, word.length - 1) + 'e')) {
                arrayNoPlurals.push(word.substr(0, word.length - 1) + 'e');
            } else if (word[word.length - 1] === 'e' && splittedText.includes(word.substr(0, word.length - 1) + 'a')) {
                arrayNoPlurals.push(word.substr(0, word.length - 1) + 'a');
            } else if (word[word.length - 1] === 'e' && (word[word.length - 2] === 'c' || word[word.length - 2] === 'g') && splittedText.includes(word.substr(0, word.length - 1) + 'ia')) {
                arrayNoPlurals.push(word.substr(0, word.length - 1) + 'ia');
            } else {
                arrayNoPlurals.push(word);  
            }
        }
    } return arrayNoPlurals;
}