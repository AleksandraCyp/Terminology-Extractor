export function getExtractionCheckboxValue (extractionCheckbox: any): ('extract' | 'notExtract') {
    if (extractionCheckbox.checked) {
      return 'extract'
      } else {
        return 'notExtract'
      }
 }