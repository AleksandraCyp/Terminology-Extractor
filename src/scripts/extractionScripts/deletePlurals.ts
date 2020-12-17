export function deleteEnglishPlurals (splittedText: string[]) {
    const arrayNoPlurals: string[] = []
    for (let word of splittedText) {
        if (word[word.length - 1] !== 's') {
            arrayNoPlurals.push(word)
        } else {
            if (splittedText.includes(word.substr(0, word.length - 1))) {
                arrayNoPlurals.push(word.substr(0, word.length - 1))
            } else {
                arrayNoPlurals.push(word)
            }
        }
    } return arrayNoPlurals;
}