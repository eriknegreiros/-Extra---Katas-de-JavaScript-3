function impares (){
   let auxiliar = []
   for (let i = 25; i >= -25; i--){
       if (i % 2 !== 0){
           auxiliar.push (i)
       }
   }
   return auxiliar.join(',')
}
console.log(impares())