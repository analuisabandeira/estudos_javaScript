// Função genérica que permite adicionar qualquer evento a um elemento; 

function atribuirEventoEmUmElemento(elemento, funcao, evento) {

    elemento.addEventListener(evento, funcao);
}

// Atribui a função de deletar um paciente da tabela quando o botão "excluir" for clicado;

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

// Ordena os pacientes por ordem alfabética quando a <th> é clicada, e inverte a ordem quando novamente clicada.

let estaEmOrdemAlfabetica = true;

function ordenarPorNome() {

    const tabela = document.querySelector("#tabela-pacientes");
    const pacientes = tabela.querySelectorAll(".paciente");

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

        paciente.imc = calculaIMC(paciente.peso, paciente.altura);
        const pacienteTr = montaTr(paciente);
        corpoTabela.appendChild(pacienteTr);
    });
}

// Quando a <th> é clicadas, ordena a tabela em ordem crescente de acordo com o valor do dado do paciente (peso, altura, gordura ou IMC), e quando novamente clicada, ordena em ordem decrescente. 

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

//AAAAAAH AAAAAAAH TROUBLE TROUBLE TROUBLE!!!

function removePaciente(event) {

    event.preventDefault();

    const pacientes = document.querySelectorAll(".paciente");

    const form = document.querySelector("#form-remover-paciente");

    const inputRemoverPaciente = document.querySelector("#input-remover-paciente");

    const nomePaciente = inputRemoverPaciente.value;

    const indexParaRemover = todosPacientes.findIndex(function (paciente) {

        return paciente.nome == nomePaciente;

    });

    if (indexParaRemover == -1) {

        alert(`O paciente não foi localizado!`);
    } else {

        todosPacientes.splice(indexParaRemover, 1);

        pacientes[indexParaRemover].classList.add("fade-out");

        setTimeout(function () {

            pacientes[indexParaRemover].remove();

         }, 500);

    }
    
    form.reset();
};