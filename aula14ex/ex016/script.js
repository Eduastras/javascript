

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
    res.innerHTML = `Contando: <br>`

    for(let i = inicio; i <= fim; i += p) {
        res.innerHTML += `${i} 👉`
    }
    }