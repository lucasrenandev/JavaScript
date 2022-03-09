window.prompt('Antes de mais nada, qual a cotação do Dolar atual?')

function conversormoeda() {
    var real = parseFloat(window.prompt('Quantos R$ você tem na carteira? '))
    var res = document.getElementById('res')

    dolar = (real / 5).toFixed(2) 
    euro = (real / 5.54).toFixed(2)

    res.innerHTML = `Com R$${real} você pode comprar US$${dolar} (Dolar) <br> E tambêm pode comprar £${euro} (Euro)`

}