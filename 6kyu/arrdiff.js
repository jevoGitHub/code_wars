//Your goal in this kata is to implement a difference function,
//which subtracts one list from another and returns the result.

function arrayDiff(a, b) {
    const result = a.filter(word => !b.includes(word))
    return result
}