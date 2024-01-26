function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'imagens/foto-manha.png'
        document.body.style.backgroundColor = '#FFBE65'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/foto-tarde.png'
        document.body.style.backgroundColor = '#D7E2E1'
    } else {
        //BOA NOITE!
        img.src = 'imagens/foto-noite.png'
        document.body.style.backgroundColor = '#112A31'
    }
}
