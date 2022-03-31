const funcaoAdicionarNeguinho = function (event) {

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

    const validaNome = validaNomePaciente(paciente);

    if (validaNome) {
        alert(`O paciente já foi inserido na tabela!`);
        return;
    }

    const tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);

    form.reset();

    const mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = " ";

}


const funcaoDeDeletar = function (event) {
    alvoEvento = event.target;
    paiDoAlvo = alvoEvento.parentNode;
    avoDoAlvo = paiDoAlvo.parentNode;

    const nomeDoPrimeiroFilho = avoDoAlvo.firstChild.textContent;

    const indexParaRemover = todosPacientes.findIndex(function (paciente) {
        return paciente.nome == nomeDoPrimeiroFilho;
    });

    todosPacientes.splice(indexParaRemover, 1);

    avoDoAlvo.classList.add("fade-out");

    setTimeout(function () {

        avoDoAlvo.remove();

    }, 500);
}

function ordenarPorNome(event) {

    const tabela = document.querySelector("#tabela-pacientes");
    const pacientes = tabela.querySelectorAll(".paciente");

    event.preventDefault();

    estaEmOrdemAlfabetica = !estaEmOrdemAlfabetica;

    pacientes.forEach(function (paciente) {
        paciente.remove()
    });

    if (estaEmOrdemAlfabetica) {
        todosPacientes.sort(function (a, b) {
            if (a.nome > b.nome) {
                return 1;
            }

            if (a.nome < b.nome) {
                return -1;
            }

            return 0;
        });
    } else {
        todosPacientes.sort(function (a, b) {
            if (a.nome > b.nome) {
                return -1;
            }

            if (a.nome < b.nome) {
                return 1;
            }

            return 0;
        });
    }

    todosPacientes.forEach(function (paciente) {
        paciente.imc = calculaIMC(paciente.peso, paciente.altura)

        const pacienteTr = montaTr(paciente);
        corpoTabela.appendChild(pacienteTr);
    });
}

let estaEmOrdemCrescente = false;

function ordenaPorPeso(event) {

    const tabela = document.querySelector("#tabela-pacientes");
    const pacientes = tabela.querySelectorAll(".paciente");

    event.preventDefault();

    estaEmOrdemCrescente = !estaEmOrdemCrescente;

    pacientes.forEach(function (paciente) {
        paciente.remove()
    });

    if (estaEmOrdemCrescente) {

        todosPacientes.sort(function (a, b) {

            return a.peso - b.peso;
        });
    } else {

        todosPacientes.sort(function (a, b) {

            return b.peso - a.peso;
        });
    }

    todosPacientes.forEach(function (paciente) {

        paciente.imc = calculaIMC(paciente.peso, paciente.altura)
        const pacienteTr = montaTr(paciente);
        corpoTabela.appendChild(pacienteTr);
    });
}

function ordenaPorAltura(event) {

    const tabela = document.querySelector("#tabela-pacientes");
    const pacientes = tabela.querySelectorAll(".paciente");

    event.preventDefault();

    estaEmOrdemCrescente = !estaEmOrdemCrescente;

    pacientes.forEach(function (paciente) {
        paciente.remove()
    });

    if (estaEmOrdemCrescente) {

        todosPacientes.sort(function (a, b) {

            return a.altura - b.altura;
        });
    } else {

        todosPacientes.sort(function (a, b) {

            return b.altura - a.altura;
        });
    }

    todosPacientes.forEach(function (paciente) {

        paciente.imc = calculaIMC(paciente.peso, paciente.altura)
        const pacienteTr = montaTr(paciente);
        corpoTabela.appendChild(pacienteTr);
    });

}

function ordenaPorGordura(event) {

    const tabela = document.querySelector("#tabela-pacientes");
    const pacientes = tabela.querySelectorAll(".paciente");

    event.preventDefault();

    estaEmOrdemCrescente = !estaEmOrdemCrescente;

    pacientes.forEach(function (paciente) {
        paciente.remove()
    });

    if (estaEmOrdemCrescente) {

        todosPacientes.sort(function (a, b) {

            return a.gordura - b.gordura;

        });
    } else {

        todosPacientes.sort(function (a, b) {

            return b.gordura - a.gordura;
        });
    }

    todosPacientes.forEach(function (paciente) {

        paciente.imc = calculaIMC(paciente.peso, paciente.altura)
        const pacienteTr = montaTr(paciente);
        corpoTabela.appendChild(pacienteTr);
    });
}
//AAAAAAH AAAAAAAH TROUBLE TROUBLE TROUBLE!!!

function ordenaPorIMC(event) {

    const tabela = document.querySelector("#tabela-pacientes");
    const pacientes = tabela.querySelectorAll(".paciente");

    event.preventDefault();

    estaEmOrdemCrescente = !estaEmOrdemCrescente;

    pacientes.forEach(function (paciente) {
        paciente.remove()
    });

    if (estaEmOrdemCrescente) {

        todosPacientes.sort(function (a, b) {

            return a.imc - b.imc;
        });
    } else {

        todosPacientes.sort(function (a, b) {

            return b.imc - a.imc;
        });
    }

    todosPacientes.forEach(function (paciente) {

        paciente.imc = calculaIMC(paciente.peso, paciente.altura)
        const pacienteTr = montaTr(paciente);
        corpoTabela.appendChild(pacienteTr);
    });
}

function removePaciente(event) {

    event.preventDefault();

    const tabela = document.querySelector("#tabela-pacientes");
    const pacientes = tabela.querySelectorAll(".paciente");
    const inputRemoverPaciente = document.querySelector(".input-remover-paciente");

    pacientes.forEach(function (paciente) {

        if (paciente.nome.toLocaleLowerCase() == inputRemoverPaciente.value.toLocaleLowerCase()) {

            paciente.remove();
            return;

        } else {
            alert(`O paciente não foi encontrado!`);
            return;
        }
    });


}

