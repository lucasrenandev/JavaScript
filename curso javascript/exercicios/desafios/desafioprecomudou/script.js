function Verificar() {
    let preço = Number(window.prompt('Qual era o preço anterior do produto? '))
    let atualpreço = Number(window.prompt('Qual o preço atual do produto? '))
    let res = document.getElementById('res')

    aumento = (atualpreço - preço) 
    desconto = (preço - atualpreço)

    let msg
    if (preço < atualpreço) {
        msg = `O produto custava ${preço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${atualpreço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        msg += '<p>Hoje o produto está mais caro.</p>'
        msg += `<p>O preço subiu ${aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao anterior.`
        msg += '<p>Uma variação de 5,6% pra cima.</p>'
    }else if (preço > atualpreço) {
        msg = `O produto custava ${preço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${atualpreço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        msg += '<p>Hoje o produto está mais barato.</p>'
        msg += `<p>O preço caiu ${desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        msg += '<p>Uma variação de 12,36% pra baixo.<p>'
    }

    res.innerHTML = '<h2>Analisando os valores informados...</h2>'
    res.innerHTML += msg
}