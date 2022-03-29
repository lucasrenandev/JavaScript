
/* ---- Condição Aninhada ---- */

var idade = 18
console.log(`Você tem ${idade} anos de idade.`)
if (idade < 18 && idade >= 16 || idade > 65) {
    console.log('Voto opcional!')
}else if (idade >= 18) {
    console.log('Voto obrigatório!')
}else {
    console.log('Não vota!')
}
