var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {

    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {

        pacientes.forEach(function(paciente) {

            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            if (nome != this.value) {

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