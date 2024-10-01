const bemVindo = document.getElementById('texto')
const nicknameUsuario = document.getElementById('nicknameUsuario')
const sairLogar = document.getElementById('sairLogar')
const popUp = document.getElementById("popUp")

function textos(){
    if(localStorage.getItem("logado") == "true"){
        bemVindo.innerHTML = "Olá " + localStorage.getItem('nome') + "!"
        nicknameUsuario.innerHTML = localStorage.getItem("nome")
        sairLogar.innerHTML = "Sair"

    }else if (localStorage.getItem("logado") == "false"){
        bemVindo.innerHTML = "Olá anônimo!"
        nicknameUsuario.innerHTML = "Anônimo"
        sairLogar.innerHTML = "Logar"
    }
}

document.getElementById('sairLogar').addEventListener("click", () =>{
    localStorage.setItem("logado", false)
    location.href = "index.html"
})

// var mostrando = false
document.getElementById('informacaoUsuario').addEventListener("click", () =>{


})


textos()