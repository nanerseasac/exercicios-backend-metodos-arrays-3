const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const getBiggest = numeros.reduce((acc, currentValue) => {
    if(acc < currentValue) {
        acc = currentValue
    }
    return acc
})

console.log(getBiggest)