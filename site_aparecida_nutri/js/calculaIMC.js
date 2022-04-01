const pacientes = document.querySelectorAll(".paciente");

// Itera por todo o array de pacientes, captando peso e altura de cada um, valida se são viáveis e caso volte como "true", calcula o IMC. Caso não sejam viáveis, retorna mensagem de erro.

pacientes.forEach(function(paciente) {

    const tdPeso = paciente.querySelector(".info-peso");
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
});

// Em sendo válidos o peso e a altura do paciente, calcularemos o IMC deste e utilizaremos o método .toFixed() que recebe como parâmetro a quantidade de casas decimais que devem ser fixadas ao valor final da variável;

function calculaIMC (peso,altura) {

    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}





