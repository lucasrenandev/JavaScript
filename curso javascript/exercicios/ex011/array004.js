let num = [5, 8, 4]
num.push(6, 7, 9) //push() = insere elemento na última posição do vetor
num.sort() //sort() = organiza o vetor em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log('O primeiro valor do vetor é o', num[0])
console.log('O último valor do vetor é o', num[5])

let pos = num.indexOf(5) //indexOf() = Verifica se o elemento se encontra ou não dentro do vetor e retorna a posição

if (pos == -1) { //-1 = Aparece quando o elemento não é encontrado
    console.log('O valor não foi encontrado!')
}else{
    console.log('O valor está na posição', pos)
}