export function hasLetter (value) {
  const ltrVal = /[a-z,A-Z]/
  return ltrVal.test(value)
}

export function hasNumber (value) {
  const numVal = /\d/
  return numVal.test(value)
}
