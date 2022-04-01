// Seleciona o botão "Adicionar Paciente" direto do HTML
const botaoAdicionar = document.querySelector("#adicionar-paciente");

// Seleciona o formulário "Adiciona Paciente" direto do HTML
const form = document.querySelector("#form-adiciona-paciente");

//  Pega os valores dos inputs do form e converte em um objeto;

function obtemPacienteDoFormulario(form) {

    const pacienteForm = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC (form.peso.value, form.altura.value)
    }
    return pacienteForm;    
}

// Vamos validar as informações no doc. "validaPaciente" antes de inserir o paciente no array;

function funcaoAdicionarPaciente(event) {

    event.preventDefault();
   
    const pacienteForm = obtemPacienteDoFormulario(form);

    const validaNome = validaNomePaciente(pacienteForm);

    if (validaNome) {
        
        alert(`O paciente já foi inserido na tabela!`);
        return;
    }

    const erros = validaPaciente(pacienteForm);

    if (erros.length > 0) {

        exibeMensagemDeErro(erros);
        return;
    }   

    todosPacientes.push(pacienteForm);

    const tabela = document.querySelector("#tabela-pacientes");
    const pacientes = tabela.querySelectorAll(".paciente");

    pacientes.forEach(function(paciente) {
        paciente.remove();
    });

    renderizarTabela ();
        
    form.reset();

    const mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = " ";
}

atribuirEventoEmUmElemento(botaoAdicionar, funcaoAdicionarPaciente, "click");