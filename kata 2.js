function contagemInvertida(){
    let auxiliar = []
    for (let i = 1; i <= 25; i++){
        auxiliar.push(i)
    }
    return auxiliar.slice(0).reverse().join(',')
}
console.log (contagemInvertida())