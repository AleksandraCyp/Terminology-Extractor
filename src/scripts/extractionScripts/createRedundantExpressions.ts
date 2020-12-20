 export function createRedundantExpressions (expressionArrayWithOccurrencies: [string, number][]) {
    const redundantExpressions: string[] = [];
    for (let expression of expressionArrayWithOccurrencies) {
        for (let expression2 of expressionArrayWithOccurrencies) {
            if (expression[0] !== expression2[0]) {
                if (expression[1] === expression2[1]) {
                    if (expression[0].includes(expression2[0])) {
                        redundantExpressions.push(expression2[0])
                    }
                }
            }
        }
    } return redundantExpressions
}