const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function paresArray() {
    let auxiliar = []
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            auxiliar.push(sampleArray[i])
        }
    }
    return auxiliar.join(',')
}
console.log(paresArray())