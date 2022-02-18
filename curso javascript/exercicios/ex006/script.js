var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var date = new Date()
//var hora = date.getHours()
var hora = 10
msg.innerHTML=`Agora são ${hora} horas.`
if (hora >= 0  && hora < 12) {
    //Bom dia!
    img.src = 'manha.jpg'
    document.body.style.background='#F6B633'
} else if (hora >= 12 && hora <= 18) {
    //boa tarde!
    img.src = 'tarde.jpg'
    document.body.style.background='#BE702D'
}else {
    //Boa noite!
    img.src='noite.jpg'
    document.body.style.background='#0A203D'
}