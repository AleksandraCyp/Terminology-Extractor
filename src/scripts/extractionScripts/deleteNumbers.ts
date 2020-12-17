export function deleteNumbers (splittedText: string[]) {
    const arrayNoNumbers: string[] = []
    for (let word of splittedText) {
        let wordNumber = +word;
        if (word !== wordNumber.toString()) {
            arrayNoNumbers.push(word)
        } 
    } return arrayNoNumbers;
}