export function joinIfNextIsLowerCase (splittedText: string[]) {
    let finalArray = splittedText.filter(e => e !== "");
    let lowerCasesArray: string[] = [];
    finalArray.map(e => { 
        let splittedTextNumber = +e[0];
        if (e[0] && (e[0] !== e[0].toUpperCase() || e[0] === splittedTextNumber.toString())) {
            lowerCasesArray.push(e);
        }      
    });
    let lowerCasesNumber = lowerCasesArray.length;
    while (lowerCasesNumber > 0) {
        const noLowerCase = [];
        let i = 0;
        while (i <= finalArray.length - 1) {
            let splittedTextNumber: number;
            if (i < finalArray.length - 1) {
                splittedTextNumber = +(finalArray[i + 1][0][0]);
                if (finalArray[i + 1][0][0] !== finalArray[i + 1][0][0].toUpperCase() || (finalArray[i + 1][0][0]) === splittedTextNumber.toString()) {
                    noLowerCase.push(finalArray[i].concat(". ", finalArray[i + 1]));
                    if (i < finalArray.length - 2) {
                        i += 2;
                    } else {
                        break;
                    }                
                } else {
                    noLowerCase.push(finalArray[i]);
                    i++;
                }
            } else {
                noLowerCase.push(finalArray[i])
                i++
            }
        }   finalArray = noLowerCase; 
            let yetAnotherArray: string[] = [];
            finalArray.map(e => { 
                let splittedTextNumber = +e[0];
                if (e[0] && (e[0] !== e[0].toUpperCase() || e[0] === splittedTextNumber.toString())) {
                    yetAnotherArray.push(e);
                }      
            });
            lowerCasesNumber = yetAnotherArray.length;
    } 
     return finalArray;
}
