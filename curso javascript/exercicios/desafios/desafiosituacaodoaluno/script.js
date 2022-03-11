function verificarNotas() {
    const nome = window.prompt('Qual o nome do aluno? ')
    const nota1 = parseFloat(window.prompt('Qual a primeira nota de ' + nome + '?'))
    const nota2 = parseFloat(window.prompt('Qual a segunda nota de ' + nome + '?'))
    const res = document.getElementById('res')
    

    média = (nota1 + nota2).toFixed(2) / 2

    let msg 
    if (média > 6) {
        msg = `Com média acima de <mark>6</mark>, o aluno esta <strong style=color:green;>APROVADO!`
    }else if (média >= 3 && (média <= 6)) {
        msg = `Com média entre <mark>3</mark> e <mark>6</mark>, o aluno esta em <strong style=background:orange;>RECUPERAÇÃO!</strong>`
    }else if (média < 3) {
        msg = `Com média abaixo de <mark>3</mark>, o aluno esta <strong style=color:red;>REPROVADO!`
    }
    
    res.innerHTML = `<p><strong>Analisando a situação de ${nome}...</strong></p>`.toUpperCase()
    res.innerHTML += `<p>Com as notas <mark>${nota1}</mark> e <mark>${nota2}</mark> a média é <strong>${média}</strong></p>`
    res.innerHTML += msg
    
}