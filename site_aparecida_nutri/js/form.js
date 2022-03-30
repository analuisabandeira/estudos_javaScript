var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();

    var form = document.querySelector("#form-adiciona-paciente");
   
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        
        exibeMensagemDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
    form.reset();

    var mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = " ";
    
});

function obtemPacienteDoFormulario(form) {

    var paciente = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC (form.peso.value, form.altura.value)
    }
    return paciente;    
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
       
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {

        erros.push("Insira o nome do paciente!");
    }

    if (!validaPeso(paciente.peso)) {

        erros.push("Peso Inválido!");
        
    }

    if (paciente.peso.length == 0) {

        erros.push("Insira o peso do seu paciente!");
    }

    if (paciente.altura.length == 0) {

        erros.push("Insira a altura do seu paciente!");
    }
        
    if (!validaAltura(paciente.altura)) {
        
        erros.push("Altura Inválida!");
    }

    if (paciente.gordura.length == 0) {

        erros.push("Insira o valor da % de gordura do paciente!");
    }

    return erros;
}

function exibeMensagemDeErro (erros) {

    var listaDeErros = document.querySelector("#mensagens-erro");
    listaDeErros.innerHTML = "";

    erros.forEach(function(erro) {

        var itemListaDeErros = document.createElement("li");
        itemListaDeErros.textContent = erro;
        listaDeErros.appendChild(itemListaDeErros);        
    });
}

