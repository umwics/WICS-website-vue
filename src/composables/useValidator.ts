/**
 * A composable that validates if propValue is one of the valid prop values
 * for a prop. This is used inside Vue's validator method.
 * @param propValue       the value of the prop
 * @param propName        name of the prop
 * @param validPropValues options for what the prop value can be
 * @returns true if propValue is valid, otherwise, prints a console warning and returns false
 */
export function useValidator(propValue: any, propName: string, validPropValues: any[]) {
  if (validPropValues.includes(propValue)) {
    return true
  }

  const validValuesString = listValidValues(validPropValues)
  console.warn(
    "The value '" +
      propValue +
      "' is not valid for prop " +
      propName +
      '. Please use one of the following: ' +
      validValuesString
  )

  return false
}

function listValidValues(validPropValues: any[]) {
  let validValuesString = ''

  for (let i = 0; i < validPropValues.length; i++) {
    validValuesString += validPropValues[i]

    if (i !== validPropValues.length - 1) {
      validValuesString += ', '
    }
  }

  return validValuesString
}
