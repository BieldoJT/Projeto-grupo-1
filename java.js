function Enviar() {
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")


    if (nome.value=='' || email.value=='') {
        alert("Nome inválido e/ou Email inválido")
        
    }
    else {
        alert("Dados cadastrados com sucesso, aguarde o contato!")
        
    }
}

function Carrinho(){
    alert("Item adicionado ao carrinho")
}

