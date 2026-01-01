

let num1 = window.document.querySelector("#numinicial")
let num2 = window.document.querySelector("#numfim")
let passo = window.document.querySelector("#passo")
let botao = window.document.querySelector("#botao")
let res = window.document.querySelector("div#res p") 
botao.addEventListener("click", contar)

function contar() {
    
    if (num1.value.length == 0 || num2.value.length == 0) {
        res.innerHTML = "Impossível contar, revise os <strong>dados!</strong>"
    } else {
        let inicio = Number(num1.value)
        let fim = Number(num2.value)
        let p = Number(passo.value)
        res.innerHTML = "Contando: <br>"
        if (p <= 0) {
            window.alert("Passo inválido, considerando passo = 1")
            p = 1
        }
        // ordem crescente
        if (inicio < fim) {
            for(let i = inicio; i <= fim; i += p) {
                res.innerHTML += `${i} \u{1F449}`
            }
        // ordem decrescente
        } else if (inicio > fim) {
            for(let i = inicio; i >= fim; i -= p) {
                res.innerHTML += `${i} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }

}