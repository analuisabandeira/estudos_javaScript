const campoFiltro = document.querySelector("#filtrar-tabela");

atribuirEventoEmUmElemento(campoFiltro, filtraTabela, "input");

// Função que compara o valor do input com o nomes dos pacientes da tabela, a fim de encontrar um determinado paciente;

function filtraTabela() {

    const pacientes = document.querySelectorAll(".paciente");

    if (campoFiltro.value.length > 0) {

        pacientes.forEach(function(paciente) {

            const tdNome = paciente.querySelector(".info-nome");

            const nomePaciente = tdNome.textContent;

            const expressao = new RegExp(campoFiltro.value, "i");

            if (!expressao.test(nomePaciente)) {

                paciente.classList.add("remove-paciente");
                //"remove-paciente" atribui um display none ao elemento. Assim, se o valor do input não bater com o paciente da tabela, o paciente vai sair da tela.

            } else {
                paciente.classList.remove("remove-paciente");
                // Se o valor do input bater com o paciente da tabela, o paciente vai ficar visível.
            }
        }
    )} else {

        pacientes.forEach(function(paciente) {
            paciente.classList.remove("remove-paciente");
            // Se nada for digitado no input, todos os pacientes devem ficar visíveis;
        })
    };
};