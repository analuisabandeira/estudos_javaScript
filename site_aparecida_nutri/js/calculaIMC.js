const title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";


const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length ; i++) {

    const paciente = pacientes [i];

    const tdPeso = paciente.querySelector (".info-peso");
    const peso = tdPeso.textContent;
    const pesoValido = validaPeso(peso);

    const tdAltura = paciente.querySelector (".info-altura");
    const altura = tdAltura.textContent;
    const alturaValida = validaAltura(altura);

    const tdIMC = paciente.querySelector(".info-imc");

    if (!pesoValido) {
        
        tdIMC.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        
        tdIMC.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {

        const valorIMC = calculaIMC(peso, altura);
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

    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}





