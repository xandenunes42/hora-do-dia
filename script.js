function carregar(){
    var td1 = document.getElementById('d1')
    var td2 = document.getElementById('d2')
    var td3 = document.getElementById('d3')
    var img = document.getElementById('imagem')
    var tp = document.getElementById('tempo')

    var data = new Date()
    var hora = data.getHours() 
    var minuto = data.getMinutes()
    var dv3 = td3

    if(hora < 10 && minuto < 10){
        td1.innerHTML = `0${hora}:0${minuto}`
    }else if(hora < 10){
        td1.innerHTML = `0${hora}:${minuto}`
    }else if(minuto < 10){
        td1.innerHTML = `${hora}:0${minuto}`
    }else{
        td1.innerHTML = `${hora}:${minuto}`
}



    if(hora >= 6 && hora < 12){
        img.src = 'manha1.png'
        dv3.innerHTML = 'Manhã'
        document.body.style.backgroundColor = '#FCE87F'
        
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        dv3.innerHTML = 'Tarde'
        document.body.style.backgroundColor = '#6AD6F3'
    }else if(hora >= 18 && hora < 24){
        img.src = 'noite.jpg'
        dv3.innerHTML = 'Noite'
        document.body.style.backgroundColor = '#332D51'
    }else{
        img.src = 'madrugada.jpg'
        dv3.innerHTML = 'Madrugada'
        document.body.style.backgroundColor = '#202930'
    }




   
}