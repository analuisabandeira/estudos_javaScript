const botaoAdicionar = document.querySelector("#adicionar-paciente");

atribuirEventoClickNumElemento(botaoAdicionar, funcaoAdicionarNeguinho, "click");

function obtemPacienteDoFormulario(form) {

    const paciente = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC (form.peso.value, form.altura.value)
    }

    return paciente;    
}

function montaTr(paciente) {

    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
       
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura + "%", "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    pacienteTr.appendChild(montaTdBotaoExcluir());
   

    return pacienteTr;
}

function montaTd(dado,classe) {

    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function montaTdBotaoExcluir() {

    const td = document.createElement("td");
    const botaoExcluir = document.createElement("button");

    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.textContent = "Remover"


    // Outra forma de fazer
    // td.innerHTML = `<button class="botao-excluir">Mandar para a vala</button>`;

    atribuirEventoClickNumElemento(botaoExcluir, funcaoDeDeletar, "click");

    td.appendChild(botaoExcluir);

    return td;
}

function validaPaciente(paciente) {

    const erros = [];

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

    const listaDeErros = document.querySelector("#mensagens-erro");
    listaDeErros.innerHTML = "";

    erros.forEach(function(erro) {

        const itemListaDeErros = document.createElement("li");
        itemListaDeErros.textContent = erro;
        listaDeErros.appendChild(itemListaDeErros);        
    });
}

function validaNomePaciente (paciente) {
    let existe = false;

    const pacientes = document.querySelectorAll(".paciente");

    pacientes.forEach(function (nego) {
            
            if (nego.querySelector(".info-nome").textContent.toLocaleLowerCase() == paciente.nome.toLocaleLowerCase()) {
    
                existe = true;
            }
    })

    return existe;
    
}

