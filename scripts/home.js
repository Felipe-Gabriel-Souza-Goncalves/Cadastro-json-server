const bemVindo = document.getElementById('texto')
var anonimo = true

function textos(){
    if(!anonimo){
        bemVindo.innerHTML = "Olá " + localStorage.getItem('nome')
    }
    else{
        bemVindo.innerHTML = "Olá anônimo!"
    }
}

textos()