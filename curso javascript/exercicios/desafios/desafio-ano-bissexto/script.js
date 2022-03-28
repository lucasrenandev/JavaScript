function AnoBissexto() {
    let ano = Number(window.prompt('Qual o ano que você quer verificar? '))
    let res = document.querySelector('div#res')

    if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0 ) {
        res.innerHTML = `O ano de ${ano} é <strong> Bissexto </strong>`;
    }else {
        res.innerHTML = `O ano de ${ano} não é <strong> Bissexto </strong>`
    }

    

}