//Return the Nth Even Number

function nthEven(n) {
    let result = 0
    for (let i = 0; i < n; i++) {
        result = i * 2
    }
    return result
}