function desconto() {
    let produto = (window.prompt('Qual o produto que você esta comprando?'))
    let preço = Number(window.prompt(`Qual o preço do produto ${produto}?`))
    let res = document.getElementById('res')

    originalpreco = preço
    desc = (preço * 10 / 100)
    novopreco = preço - (preço * 10 / 100)

    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto} ...</h2>`
    res.innerHTML += `<p>O preço original era R$ ${originalpreco.toFixed(2)}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$ ${desc.toFixed(2)} de desconto.</p>`
    res.innerHTML += `<p>No fim, você vai pagar R$ ${novopreco.toFixed(2)} no produto ${produto}.</p>`
    

}