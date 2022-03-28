function ReajusteSalarial() {
    var nome = window.prompt('Qual o nome do funcionário? ')
    var salário = Number(window.prompt('Qual o salário de ' + nome + '?'))
    var reajuste = Number(window.prompt('O salário de ' + nome + ' vai ser reajustado em qual porcentagem?'))
    var res = document.getElementById('res')

    var aumento = (salário * reajuste) / 100
    novosalário = salário + aumento


    res.innerHTML = `<h2>O funcionário ${nome.toUpperCase()} recebeu um aumento!</h2>`
    res.innerHTML += `<p>O salário atual do funcionário é ${salário.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
    res.innerHTML += `<p>Com um aumento de ${reajuste}%, o salário irá aumentar ${aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir dai, ${nome.toUpperCase()} passará a receber ${novosalário.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}!</p>` 

}