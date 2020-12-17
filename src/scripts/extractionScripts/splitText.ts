// splits a text into separate words (looks for blank spaces) and returns an array 

export function splitText (text: string, splitter: string | RegExp) {
    const splitted = text.split(splitter)
    return splitted;
}

