var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

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
}

if (altura <= 0 || altura >= 3.00) {

    altura = false;
    tdIMC.textContent = "Altura Inválida!";
}

if (peso && altura) {

    var valorIMC = peso / (altura * altura);
    tdIMC.textContent = valorIMC;
}




