import {splitText} from '../splitText'

describe('check splitText function', () => {
    test('"Ania i Kasia jadą razem na wycieczkę, ale Ola nie!" is splitted"', () => {
        const corSplitted = ['Ania', 'i', 'Kasia', 'jadą', "razem", 'na', 'wycieczkę,', 'ale', 'Ola', 'nie!']
        expect(splitText("Ania i Kasia jadą razem na wycieczkę, ale Ola nie!", " ")).toEqual(corSplitted)
    })
}) 