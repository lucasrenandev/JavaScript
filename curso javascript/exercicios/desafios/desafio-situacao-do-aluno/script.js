function verificarNotas() {
    let nome = window.prompt('Qual o nome do aluno? ')
    let nota1 = Number(window.prompt('Qual a primeira nota de ' + nome + '?'))
    let nota2 = Number(window.prompt('Qual a segunda nota de ' + nome + '?'))
    let res = document.getElementById('res')
    

    let média = (nota1 + nota2) / 2

    let msg 
    if (média > 6) {
        msg = `Com média acima de <mark>6</mark>, o aluno está <strong style=color:green;>APROVADO!</strong>`
    }else if (média >= 3 && (média <= 6)) {
        msg = `Com média entre <mark>3</mark> e <mark>6</mark>, o aluno está em <strong style=color:darkorange;>RECUPERAÇÃO!</strong>`
    }else if (média < 3) {
        msg = `Com média abaixo de <mark>3</mark>, o aluno está <strong style=color:red;>REPROVADO!</strong>`
    }
    
    res.innerHTML = `<h2>Analisando a situação de ${nome.toUpperCase()}...</h2>` //método toUpperCase() = jogar para Maiúsculas.
    res.innerHTML += `<p>Com as notas <mark>${nota1}</mark> e <mark>${nota2}</mark> a média é <strong>${média.toFixed(2)}</strong></p>` //método toFixed()= Selecionar quantas casas decimais deseja.
    res.innerHTML += msg
    
}