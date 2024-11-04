
function deletarConta(){
    if(document.getElementById("usuarioEmail").value != localStorage.getItem("nome") && document.getElementById("usuarioEmail").value != localStorage.getItem("email")){
        alert("Usuário/email não existente!")
        return
    }
    if(document.getElementById("senha1").value != localStorage.getItem("senha") || document.getElementById("senha2").value != document.getElementById("senha1").value ){
        alert("senha incorreta")
        return
    }
    localStorage.removeItem("nome")
    localStorage.removeItem("email")
    localStorage.removeItem("senha")

    window.location.href="index.html"
}