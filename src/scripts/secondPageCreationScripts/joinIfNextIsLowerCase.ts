export function joinIfNextIsLowerCase (splittedText: string[]) {
    const noLowerCase = [];
    let i = 0;
    while (i < splittedText.length - 1) {
        let splittedTextNumber = +(splittedText[i + 1][0][0]);
        if (splittedText[i + 1][0][0] !== splittedText[i + 1][0][0].toUpperCase() || (splittedText[i + 1][0][0]) === splittedTextNumber.toString()) {
            noLowerCase.push(splittedText[i].concat(". ", splittedText[i + 1]));
            if (i < splittedText.length - 3) {
                i += 2;
            } else {
                break;
            }
            
        } else {
            noLowerCase.push(splittedText[i]);
            i++;
        }
    } return noLowerCase;
}
