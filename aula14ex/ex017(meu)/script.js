
let botao = window.document.querySelector("#botao")
botao.addEventListener("click", tabuada)

function tabuada() {
    let num = window.document.querySelector("#inum")
    let tabuada = window.document.querySelector("#iselect")
    
    if (num.value.length === 0) {
        window.alert("Insira um número!")
    } else {
        tabuada.innerHTML = ""
        let n = Number(num.value)        
        for(let c = 1; c <= 10; c++){
            let op = document.createElement("option")
            op.text = `${n} x ${c} = ${n*c}`
            op.value = c
            tabuada.appendChild(op)
        }
    }
}