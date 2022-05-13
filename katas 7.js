function divisivelPor7() {
    let auxiliar = []
    for (let i = 7; i <= 100; i++) {
        if (i % 7 === 0) {
            auxiliar.push(i)
        }
    }
    return auxiliar.join(',')
}
console.log(divisivelPor7())