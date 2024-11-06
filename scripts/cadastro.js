
function filtroDados(){
    const inputUsuario = document.getElementById('usuario').value
    const inputEmail = document.getElementById('email').value
    const inputSenha =  document.getElementById('senha').value
    
    if(inputUsuario.length <= 4){
        alert("O usuário deve ter pelo menos 4 caracteres")
        return
    } else if (inputUsuario.charAt(0).toUpperCase() != inputUsuario.charAt(0)){
        alert("O nome deve começar com letra maiúscula")
        return
    }

    enviarDados()
}


//Função para enviar os dados POST - CREATE
function enviarDados() {
    //Obter os valores dos campos informados pelo usuário
    const inputUsuario = document.getElementById('usuario').value
    const inputEmail = document.getElementById('email').value
    const inputSenha =  document.getElementById('senha').value

    //Enviar um função que puxa o valor de uma API - FETCH
    fetch('http://localhost:3000/usuarios', {
        method: 'POST', //Metodo POST HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({nome: inputUsuario, email: inputEmail, senha: inputSenha}) //Dados a serem enviados e convertidos
    })
    .then(resposta => resposta.JSON) //Converte a resposta para JSON
    
    window.location.href = "home.html"
}