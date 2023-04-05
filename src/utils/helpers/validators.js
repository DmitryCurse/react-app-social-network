export const required = value => {
    if (value) return undefined
    return 'Require is failed'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}