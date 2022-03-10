function ReajusteSalarial() {
    var nome = window.prompt('Qual o nome do funcionário? ')
    var salário = parseFloat(window.prompt('Qual o salário de ' + nome + '?'))
    var aumento = parseFloat(window.prompt('O salário de ' + nome + ' sera reajustado em qual %?'))
    var res = document.getElementById('res')
    var resn = document.getElementById('resn')

    aumento = salário * 18 / 100
    novosalario = salário + (salário * 18 / 100)

    resn.innerHTML = 'O funcionário ' + nome + ' recebeu um aumento!'
    res.innerHTML = `O salário atual do funcionário é R$ ${salário} <br> Com um aumento de 18%, o salário irá aumentar R$ ${aumento.toFixed(2)} no proximo mês. <br> E a partir dai, ${nome} irá passar a ganhar R$${novosalario.toFixed(2)}!`
}