function divisivelPor7Ou3() {
    let auxiliar = []
    for (let i = 3; i <= 100; i++) {
        if (i % 7 === 0 || i % 3 === 0) {
            auxiliar.push(i)
        }
    }
    return auxiliar.slice(0).reverse().join(',')
}
console.log(divisivelPor7Ou3())