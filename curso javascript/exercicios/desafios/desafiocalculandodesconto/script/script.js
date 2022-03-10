function desconto() {
    let produto = (window.prompt('Qual o produto que você esta comprando?'))
    let preço = parseFloat(window.prompt(`Qual o preço do produto ${produto}?`))
    let res = document.getElementById('res')

    originalpreco = preço.toFixed(2)
    desc = (preço * 10 / 100)
    novopreco = preço - (preço * 10 / 100)

    res.innerHTML = `Calculando desconto de 10% para ${produto}... <br> O preço original era R$${originalpreco}. <br> Você acaba de ganhar ${desc.toFixed(2)} de desconto (-10%). <br> No fim, você vai pagar R$${novopreco.toFixed(2)} no produto ${produto}`
}