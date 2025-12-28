
let data = new Date()
let anoAtual = data.getFullYear()
let txtinput = window.document.querySelector("#ano")
txtinput.value = anoAtual
let botao = window.document.querySelector("#botao")
botao.addEventListener("click", verificar)
let resposta = window.document.querySelector("#res")

function verificar() {    
    let fano = window.document.querySelector("#ano")
    let res = window.document.querySelector("div#res p")
    if (Number(fano.value) < 1875 || Number(fano.value) > anoAtual) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        let formsex = window.document.getElementsByName("radsex")
        let idade = anoAtual - Number(fano.value)
        let genero = ""
        
        if (formsex[0].checked) {
            genero = "homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "imgs/M-bebe.png")
            } else if(idade < 20) {
                //jovem
                img.setAttribute("src", "imgs/M-jovem.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "imgs/M-adulto.png")
            } else {
                // idoso
                img.setAttribute("src", "imgs/M-idoso.png")
            }
        } else {
            genero = "mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "imgs/F-bebe.png")
            } else if(idade < 20) {
                //jovem
                img.setAttribute("src", "imgs/F-jovem.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "imgs/F-adulto.png")
            } else {
                // idoso
                img.setAttribute("src", "imgs/F-idoso.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`   
    }
}    

let img = window.document.createElement("img") //createElement serve para criar um elemento, ou seja uma tag no HTML

img.setAttribute("id", "foto") //o setAttribute é pra criar um atributo na tag que criamos. No caso adicionamos um "id", chamado "fotos"

resposta.appendChild(img) // append.child serve para o elemento que esta na variavel, receber um filho que será o que esta entre ()