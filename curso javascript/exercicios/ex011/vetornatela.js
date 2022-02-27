let valores = [2, 3, 5, 8, 9, 10, 14, 4, 23]

/*
for (let pos = 0; pos <num.length; pos++) {
    console.log(` A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}