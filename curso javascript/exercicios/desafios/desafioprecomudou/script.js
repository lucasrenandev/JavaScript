function Verificar() {
    let preço = Number(window.prompt('Qual era o preço anterior do produto? '))
    let atualpreço = Number(window.prompt('Qual o preço atual do produto? '))
    let res = document.getElementById('res')

    aumento = (preço * 5.6 / 100).toFixed(2)
    desconto = (atualpreço * 12.36 / 100).toFixed(2)

    let msg
    if (preço < atualpreço) {
        msg = `O produto custava R$${preço} e agora custa R$${atualpreço}`
        msg += '<p>Hoje o produto está mais caro.</p>'
        msg += `<p>O preço subiu R$${aumento} em relação ao anterior.`
        msg += '<p>Uma variação de 5,6% pra cima.</p>'
    }else if (preço > atualpreço) {
        msg = `O produto custava R$${preço} e agora custa R$${atualpreço}`
        msg += '<p>Hoje o produto está mais barato.</p>'
        msg += `<p>O preço caiu R$${desconto} em relação ao preço anterior.</p>`
        msg += 'Uma variação de 12,36% pra baixo.'
    }

    res.innerHTML = '<strong><p>Analisando os valores informados...</p></strong>'.toUpperCase()
    res.innerHTML += msg
}