// Remove o paciente quando o botão "excluir" for clicado;

const botaoRemoverPaciente = document.querySelector("#remover-paciente");

atribuirEventoEmUmElemento(botaoRemoverPaciente, removePaciente, "click");

// Função que remove o paciente quando um doubleclick for escutado ===>

// tabela.addEventListener("dblclick", function(event) {

//     alvoEvento = event.target;
//     paiDoAlvo = alvoEvento.parentNode;

//     paiDoAlvo.classList.add("fade-out");

//     setTimeout (function() {

//         paiDoAlvo.remove();

//     }, 500);    
// });
