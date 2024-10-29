const inputUsuario = document.getElementById('usuario')
const inputEmail = document.getElementById('email')
const inputSenha =  document.getElementById('senha')
var logado = false
localStorage.setItem("logado", logado)

function pegarDados(){
    var nome = document.getElementById('usuario').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    if(nome.length <=3 || email <=3 || email.indexOf("@") == -1 || senha.length <= 3){
        inputUsuario.classList.add("inputErro")
        console.log(inputUsuario)
        return 0
    }
    
    irLocalStorage(nome, email, senha)
    location.href = "index.html" 
}

function confirmarDados(){
    var login = document.getElementById('usuarioLogin').value
    var loginSenha = document.getElementById('senhaLogin').value

    if(!localStorage.getItem("nome")){
        alert("Não há esse registro")
        return 0
    }
    else if(login != localStorage.getItem("nome") && login != localStorage.getItem("email")){
        alert("está errado, tente novamente")
        return 0
    }
    else if(loginSenha != localStorage.getItem("senha")){
        alert("Senha incorreta")
        return 0
    }
    else{
        logado = true
        localStorage.setItem("logado", logado)
        location.href="home.html"
    }
}

function irLocalStorage(nome, email, senha){
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email)
    localStorage.setItem("senha", senha)



}

// localStorage.clear()