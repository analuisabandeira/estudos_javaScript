// Verifica se existe um paciente com o mesmo nome na tabela;

function validaNomePaciente(pacienteForm) {
    
    let pacienteExiste = false;

    const pacientes = document.querySelectorAll(".paciente");
   
    pacientes.forEach(function(paciente) {

        const nomePaciente = paciente.querySelector(".info-nome");
            
            if (nomePaciente.textContent.toLocaleLowerCase() == pacienteForm.nome.toLocaleLowerCase()) {    
                pacienteExiste = true;
            }
    })

    return pacienteExiste;    
}

// Verifica se o peso do paciente é válido

function validaPeso(peso) {

    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

// Verifica se a altura do paciente é válida

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true;
    } else {
        return false;
    }
}

// Verifica possíveis erros no ato de inserir o paciente na tabela através do form e retorna um array de erros;

function validaPaciente(pacienteForm) {

    const erros = [];

    if (pacienteForm.nome.length == 0) {

        erros.push("Insira o nome do paciente!");
    }

    if (!validaPeso(pacienteForm.peso)) {

        erros.push("Peso Inválido!");
        
    }

    if (pacienteForm.peso.length == 0) {

        erros.push("Insira o peso do seu paciente!");
    }

    if (pacienteForm.altura.length == 0) {

        erros.push("Insira a altura do seu paciente!");
    }
        
    if (!validaAltura(pacienteForm.altura)) {
        
        erros.push("Altura Inválida!");
    }

    if (pacienteForm.gordura.length == 0) {

        erros.push("Insira o valor da % de gordura do paciente!");
    }

    return erros;
}

// Em sendo inválida(s) alguma(s) informação(s) do paciente, exibiremos uma lista não ordenada apontando o(s) erro (s) em questão;

function exibeMensagemDeErro (erros) {

    const listaDeErros = document.querySelector("#mensagens-erro");
    listaDeErros.innerHTML = " "; // Limpa a lista antes de montá-la;

    erros.forEach(function(erro) {

        const itemListaDeErros = document.createElement("li");
        itemListaDeErros.textContent = erro;
        listaDeErros.appendChild(itemListaDeErros);        
    });
}