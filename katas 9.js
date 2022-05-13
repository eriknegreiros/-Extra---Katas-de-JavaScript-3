function divisivelPor5() {
    let auxiliar = []
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 1 && i % 5 === 0) {
            auxiliar.push(i)
        }
    }
    return auxiliar.join(',')
}
console.log(divisivelPor5())