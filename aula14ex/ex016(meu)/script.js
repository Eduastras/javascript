

let num1 = window.document.querySelector("#numinicial")
let num2 = window.document.querySelector("#numfim")
let passo = window.document.querySelector("#passo")
let botao = window.document.querySelector("#botao")
let res = window.document.querySelector("div#res p") 
botao.addEventListener("click", contar)

function contar() {
    let inicio = Number(num1.value)
    let fim = Number(num2.value)
    let p = Number(passo.value)
    
    if (inicio === 0 || fim === 0) {
        res.innerHTML = "Impossível contar, revise os <strong>dados!</strong>"
    } else if (p <= 0 && inicio > fim) {
        window.alert("Passo invalido, considerando (passo = 1)")
        p = 1
        res.innerHTML = "Contando: <br>"
        for(let i = inicio; i >= fim; i -= p) {
            res.innerHTML += `${i} 👉`
        }
        res.innerHTML += "🏁"
    } else if (p <= 0 && inicio < fim) {
        window.alert("Passo invalido, considerando (passo = 1)")
        p = 1
        res.innerHTML = "Contando: <br>"
        for(let i = inicio; i <= fim; i += p) {
            res.innerHTML += `${i} 👉`
        }
        res.innerHTML += "🏁"
    } else if (inicio > fim) {
        res.innerHTML = "Contando: <br>"
        for(let i = inicio; i >= fim; i -= p) {
            res.innerHTML += `${i} 👉`
        }
        res.innerHTML += "🏁"
    } else {
        res.innerHTML = "Contando: <br>"
        for(let i = inicio; i <= fim; i += p) {
            res.innerHTML += `${i} 👉`
        }
        res.innerHTML += "🏁"
    }

}