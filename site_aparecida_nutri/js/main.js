var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++) {

    var paciente = pacientes [i];

    var tdPeso = paciente.querySelector (".info-peso");
    var peso = tdPeso.textContent;
    var pesoValido = true;

    var tdAltura = paciente.querySelector (".info-altura");
    var altura = tdAltura.textContent;
    var alturaValida = true;

    var tdIMC = paciente.querySelector(".info-imc");

    if (peso <= 0 || peso >= 1000) {

    peso = false;
    tdIMC.textContent = "Peso Inválido!";
    paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {

    altura = false;
    tdIMC.textContent = "Altura Inválida!";
    paciente.classList.add("paciente-invalido");
    }

    if (peso && altura) {

    var valorIMC = peso / (altura * altura);
    tdIMC.textContent = valorIMC.toFixed(2);
    }

    var botaoAdicionar = document.querySelector("#adicionar-paciente");

    botaoAdicionar.addEventListener("click", function (event) {

        var form = document.querySelector("#form-adiciona");

        var nomePaciente = form.nome.value;        
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value;

        var pacienteTr = document.createElement("tr");

        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");

        nomeTd.textContent = nomePaciente;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);




        event.preventDefault();
        
    });
}




