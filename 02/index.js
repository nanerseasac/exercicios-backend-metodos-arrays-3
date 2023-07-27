const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const getString = cidades.reduce((acc, currentValue) => {
    if(currentValue.length > acc.length) {
        acc = currentValue
    }
    return acc
})

console.log(getString)