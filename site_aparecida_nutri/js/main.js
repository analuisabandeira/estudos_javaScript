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
    botaoAdicionar.addEventListener("click", function () {

        console.log ("Fui clicado!");
    });
}




