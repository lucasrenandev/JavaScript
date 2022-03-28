var cotação = Number(window.prompt('Antes de mais nada, qual a cotação do Dolar atual?'))

function conversormoeda() {
    var real = Number(window.prompt('Quantos R$ você tem na carteira? '))
    let dolar = real / cotação
    var res = document.getElementById('res')

    res.innerHTML = '<h2>Conversão de Reais para Doláres</h2>'
    res.innerHTML += `<p>Você tem ${real.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} na carteira.</p>`
    res.innerHTML += `<p>Considerando que $1.00 = ${cotação.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} na cotação informada.</p>`
    res.innerHTML += `<p>Com ${real.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} você pode comprar ${dolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} Dólares.`

}