function ReajusteSalarial() {
    var nome = window.prompt('Qual o nome do funcionário? ')
    var salário = Number(window.prompt('Qual o salário de ' + nome + '?'))
    var reajuste = Number(window.prompt('O salário de ' + nome + ' vai ser reajustado em qual porcentagem?'))
    var res = document.getElementById('res')
    var resn = document.getElementById('resn')

    var aumento = (salário * reajuste) / 100
    novosalario = salário + aumento

    resn.innerHTML = 'O funcionário ' + nome + ' recebeu um aumento!'
    res.innerHTML = `O salário atual do funcionário é ${salário.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br> Com um aumento de ${reajuste}%, o salário irá aumentar ${aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês. <br> E a partir dai, ${nome} passará a ganhar R$${novosalario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}!`
}