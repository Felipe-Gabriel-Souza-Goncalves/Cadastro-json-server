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
}

function confirmarDados(){
    var login = document.getElementById('usuarioLogin').value
    var loginSenha = document.getElementById('senhaLogin').value

    fetch(`http://localhost:3000/usuarios`)
    .then(resposta => resposta.json())
    .then(dados =>{
        
        dados.forEach(usuario => {
            if(usuario.nome == login || usuario.email == login && usuario.senha == loginSenha){
                localStorage.setItem("nome", usuario.nome)
                localStorage.setItem("email", usuario.email)

                logado = true
                localStorage.setItem("logado", logado)
                window.location.href = "home.html"
            }
        });


    })

}

function irLocalStorage(nome, email){
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email)
}

// localStorage.clear()