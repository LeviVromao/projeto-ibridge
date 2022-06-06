const campo= document.getElementsByClassName('formulario')
const nomedeusuario = document.getElementsByClassName('NomesFormula')
const telefone = document.getElementsByClassName('telefone')
const email = document.getElementsByClassName('emailFormula')
const empresanome = document.getElementsByClassName('empresaFormula')

campo.addEventListener('submit', function (e) {
        e.preventDefault()
        checarinputs();
    });
 function checarinputs() {
     const valordonome = NomesFormula.value
     const valordoemail = emailFormula.value
     const valordotelefone = telefone.value
     const valordaempresa= empresaFormula.value
     if(valordonome === ''){
         setErrorfor(NomesFormula, 'O nome de usuário é obrigatório.');

}}

function setErrorfor(input, message) {
    const controledcampo = input.parentElement;
    const small = campo.querySelector('small')
    small.innerText = message;

    campo.className = "campo error"
}