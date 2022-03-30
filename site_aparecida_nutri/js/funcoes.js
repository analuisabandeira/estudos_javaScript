const funcaoAdicionarNeguinho = function(event) {

    event.preventDefault();

    const form = document.querySelector("#form-adiciona-paciente");
   
    const paciente = obtemPacienteDoFormulario(form);

    todosPacientes.push(paciente);

    const pacienteTr = montaTr(paciente);

    const erros = validaPaciente(paciente);


    if (erros.length > 0) {
        
        exibeMensagemDeErro(erros);
        return;
    }

    const validaNome =validaNomePaciente(paciente);
    
    if (validaNome) {
        alert(`O paciente já foi inserido na tabela!`);
        return
    }

    const tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
    form.reset();

    const mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = " ";
    
}


const funcaoDeDeletar = function(event) {
    alvoEvento = event.target;
    paiDoAlvo = alvoEvento.parentNode;
    avoDoAlvo = paiDoAlvo.parentNode;

    const nomeDoPrimeiroFilho = avoDoAlvo.firstChild.textContent;
    
    const indexParaRemover = todosPacientes.findIndex(function (paciente) {
        return paciente.nome == nomeDoPrimeiroFilho;
    });

    todosPacientes.splice(indexParaRemover, 1);

    avoDoAlvo.classList.add("fade-out");

    setTimeout (function() {

        avoDoAlvo.remove();

    }, 500);    
}

function ordenarePorNome(event) {
    event.preventDefault();

    estaEmOrdemAlfabetica = !estaEmOrdemAlfabetica;

    const tabela = document.querySelector("#tabela-pacientes");
    
    const pacientes = tabela.querySelectorAll(".paciente");

    pacientes.forEach(function (paciente) {
        paciente.remove()
    });
    
    if (estaEmOrdemAlfabetica) {
        todosPacientes.sort(function(a,b) {
            if (a.nome > b.nome) {  
                return 1;
            }
        
            if (a.nome < b.nome) {  
                return -1;
            }
        
            return 0;
        });
    } else {
        todosPacientes.sort(function(a,b) {
            if (a.nome > b.nome) {  
                return -1;
            }
        
            if (a.nome < b.nome) {  
                return 1;
            }
        
            return 0;
        });
    }
    
    todosPacientes.forEach(function(paciente) {
        paciente.imc = calculaIMC(paciente.peso, paciente.altura)

        const pacienteTr =  montaTr(paciente);
        corpoTabela.appendChild(pacienteTr);
    });
}