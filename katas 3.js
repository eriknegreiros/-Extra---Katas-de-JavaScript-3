function contagemNegativos (){
    let auxiliar = []
    for (let i = -1; i >= -25; i--){
        auxiliar.push(i)
    }
    return auxiliar.join(',')
}
console.log (contagemNegativos())