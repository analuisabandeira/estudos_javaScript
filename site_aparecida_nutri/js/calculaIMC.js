var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++) {

    var paciente = pacientes [i];

    var tdPeso = paciente.querySelector (".info-peso");
    var peso = tdPeso.textContent;
    var pesoValido = validaPeso(peso);

    var tdAltura = paciente.querySelector (".info-altura");
    var altura = tdAltura.textContent;
    var alturaValida = validaAltura(altura);

    var tdIMC = paciente.querySelector(".info-imc");

    if (!pesoValido) {
        
        tdIMC.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        
        tdIMC.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {

        var valorIMC = calculaIMC(peso, altura);
        tdIMC.textContent = valorIMC;
    }   
}

function validaPeso(peso) {

    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true;
    } else {
        return false;
    }
}

function calculaIMC (peso,altura) {

    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}





