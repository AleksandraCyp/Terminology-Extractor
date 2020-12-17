export function deleteDoublets (splittedText: string[]) {
    const arrayNoDoublets: string[] = []
    for (let word of splittedText) {
        if (word[0] === word[0].toLowerCase()) {
            arrayNoDoublets.push(word)
        } else {
            if (splittedText.includes(word.toLowerCase())) {
                arrayNoDoublets.push(word.toLowerCase())
            } else {
                arrayNoDoublets.push(word)
            }
        }
    } return arrayNoDoublets;
}