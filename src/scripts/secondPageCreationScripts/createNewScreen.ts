export function createNewScreen () {
   const app = document.querySelector('.app');
   app!.classList.add('secondScreenApp');
   app!.innerHTML = '<div id="textShowScreen"></div><input type="button" value="+" id="addNewTerm"><select id="whichAdditionalScreens" name="whichAdditionalScreen"><option value="examples">show example sentences</option><option value="parallelText">show a parallel text</option><option value="parallelExamples">show parallel examples</option></select><form id="occurrenciesForm"><ul class="occurrenciesList" id="occurrenciesListNoTranslation"></ul></form><div id="parallelTextArea"><input type="button" value="accept" id="acceptParallelTextButton"><textarea placeholder="Paste a parallel text"></textarea></div><input type="button" id="downloadList" value="download a txt list">';
}
