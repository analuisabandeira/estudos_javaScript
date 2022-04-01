// Monta a célula com a informação do paciente;

function montaTd(dado,classe) {

    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

// Monta a célula com o botão de excluir o paciente;

function montaTdBotaoExcluir() {

    const td = document.createElement("td");
    const botaoExcluir = document.createElement("button");

    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.textContent = "Remover"

    // Outra forma de fazer ===>
    //  ===> td.innerHTML = `<button class="botao-excluir">Mandar para a vala</button>`;

    atribuirEventoEmUmElemento(botaoExcluir, funcaoDeDeletar, "click");

    td.appendChild(botaoExcluir);

    return td;
}

// Monta a linha com todas as informações do paciente + botão de excluir o paciente;

function montaTr(paciente) {

    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
       
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura+ "%", "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    pacienteTr.appendChild(montaTdBotaoExcluir());
   
    return pacienteTr;
}