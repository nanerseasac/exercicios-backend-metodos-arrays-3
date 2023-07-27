const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

numeros.sort((a,b) => a - b) // a)


console.log(numeros)

numeros.sort((a,b) => b - a) // b)

console.log(numeros)

numeros.sort() // c)

console.log(numeros)

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

frutas.sort((a , b) => {
    return a.localeCompare(b) // d)
})

console.log(frutas)

frutas.sort((a , b) => {
    return b.localeCompare(a) // e)
})

console.log(frutas) // f)

frutas.sort((a, b) => {
    return a.length - b.length
})

console.log(frutas)