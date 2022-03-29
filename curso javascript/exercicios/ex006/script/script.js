function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()  //getHours() = Pega a hora do sistema
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = './img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = './img/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else {
        //Boa Noite
        img.src = './img/noite.jpg'
        document.body.style.background = '#515154'
    }

}

