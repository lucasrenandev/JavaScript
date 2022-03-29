function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.src = './img/foto-criancaH.jpg'
            }else if (idade < 25) {
                //Jovem
                img.src = './img/foto-jovemH.jpg'
            }else if (idade < 50) {
                //Adulto
                img.src = './img/foto-adultoH.jpg'
            }else {
                //Idoso
                img.src = './img/foto-idosoH.jpg'
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.src = './img/foto-criancaM.jpg'
            }else if (idade < 25) {
                //Jovem
                img.src = './img/foto-jovemM.jpg'
            }else if (idade < 50) {
                //Adulto
                img.src = './img/foto-adultoM.jpg'
            }else {
                //Idoso
                img.src = './img/foto-IdosoM.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}