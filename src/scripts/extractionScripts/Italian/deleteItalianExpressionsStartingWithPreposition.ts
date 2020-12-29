export function deleteItalianExpressionsStartingWithPreposition (termsArray: [string, number][]) {
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