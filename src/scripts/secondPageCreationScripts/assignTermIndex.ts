export function assingTermIndex (allTermsCollection: HTMLCollection) {
    let termIndex = 0;
    const termList = allTermsCollection;
    for (let term of termList) {
      term.querySelector('.originalWord')!.setAttribute('termIndex', termIndex.toString())
      term.querySelector('.translatedWord')!.setAttribute('termIndex', (termIndex + termList.length).toString())
        termIndex++;
    }
}
