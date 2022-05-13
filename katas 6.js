function divisivelPor3 (){
    let auxiliar = []
    for (let i = 3; i <= 100; i++){
        if (i % 3 === 0){
            auxiliar.push (i)
        }
    }
    return auxiliar.join(',')
 }
 console.log(divisivelPor3())