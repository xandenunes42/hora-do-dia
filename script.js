function carregar(){
    var td1 = document.getElementById('d1')
    var td2 = document.getElementById('d2')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours() 
    var minuto = data.getMinutes()

    var hora = 22
    td1.innerHTML = `${hora}:${minuto}`

    if(hora > 0 && hora < 12){
        img.src = 'manha1.png'
    }else if(hora > 12 && hora < 18){
        img.src = 'tarde.jpg'
    }else{
        img.src = 'noite.jpg'
    }


   
}