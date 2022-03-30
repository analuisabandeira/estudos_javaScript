const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {

    const pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {

        pacientes.forEach(function(paciente) {

            const tdNome = paciente.querySelector(".info-nome");
            const nome = tdNome.textContent;
            const expressao = new RegExp(campoFiltro.value, "i")

            if (!expressao.test (nome)) {

                paciente.classList.add("remove-paciente");

            } else {

                paciente.classList.remove("remove-paciente");
            }
        }
    )} else {

        pacientes.forEach(function(paciente) {
            paciente.classList.remove("remove-paciente");
        })
    };
});