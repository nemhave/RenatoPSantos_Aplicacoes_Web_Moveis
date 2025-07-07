
// confere se os campos foram preenchidos

function ValidaCampo() {

    var campoNome  = document.getElementById("nome");
    var campoEmail = document.getElementById("email");
    var campoMsg = document.getElementById("mensagem");

    if ((campoNome.value.length == 0) || (campoEmail.value.length == 0) || (campoMsg.value.length == 0)) {
        alert("Preencha os campos!");
    }

}