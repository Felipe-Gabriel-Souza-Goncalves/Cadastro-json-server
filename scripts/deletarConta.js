
function deletarConta(){

    var login = document.getElementById("usuarioEmail").value
    var senha1 = document.getElementById("senha1").value
    var senha2 = document.getElementById("senha2").value

    fetch(`http://localhost:3000/usuarios`)
    .then(resposta => resposta.json())
    .then(dados =>{
        
        dados.forEach(usuario => {
            if(usuario.nome == login ||
                 usuario.email == login && 
                 usuario.senha == loginSenha &&
                 senha2 == senha1){

                var id = usuario.id
                console.log(id, usuario.id)
                
                fetch(`http://localhost:3000/usuarios/${id}`, {
                    method: 'DELETE'
                })
                .then(response => response.json())
                window.location.href = "home.html"
            }
        });


    })

    localStorage.removeItem("nome")
    localStorage.removeItem("email")

    // window.location.href="index.html"
}