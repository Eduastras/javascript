
let body = window.document.body
body.addEventListener("load", carregar())

function carregar() {
    let msg = window.document.querySelector("#msg")
    let manha = window.document.querySelector("#manha")
    let tarde = window.document.querySelector("#tarde")
    let noite = window.document.querySelector("#noite")
    let dat = new Date()
    let hora = dat.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> <strong>horas</strong> <br>`
    
    if (hora >= 0 && hora <= 12){
        manha.style.display = "block"
        tarde.style.display = "none"
        noite.style.display = "none"
        document.body.style.backgroundColor = "#b7afa4"
        msg.innerHTML += "<strong>Bom Dia!</strong>"
        // bom dia!
        
    } else if (hora >= 12 && hora <= 18) {
        manha.style.display = "none"
        tarde.style.display = "block"
        noite.style.display = "none"
        document.body.style.backgroundColor = "#c28e4bff"
        msg.innerHTML += "<strong>Boa Tarde!</strong>"
        // boa tarde!
    } else {
        manha.style.display = "none"
        tarde.style.display = "none"
        noite.style.display = "block"
        msg.innerHTML += "<strong>Boa Noite!</strong>"
        document.body.style.backgroundColor = "#332742"
        // boa noite!
    }

        
    
}