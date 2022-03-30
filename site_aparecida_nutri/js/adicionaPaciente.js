const corpoTabela = document.querySelector("#tabela-pacientes");
const paciente = document.querySelectorAll(".paciente");

let estaEmOrdemAlfabetica = true;

const todosPacientes = [

    {
        nome: "Paulo",
        peso: 100,
        altura: 2.00,
        gordura: 10,
        imc: 0
    },

    {
        nome: "João",
        peso: 80,
        altura: 1.72,
        gordura: 40,
        imc: 0
    },

    {
        nome: "Erica",
        peso: 54,
        altura: 1.64,
        gordura: 14,
        imc: 0
    },

    {
        nome: "Douglas",
        peso: 85,
        altura: 1.73,
        gordura: 24,
        imc: 0
    },

    {
        nome: "Tatiana",
        peso: 46,
        altura: 1.55,
        gordura: 19,
        imc: 0
    }
];

todosPacientes.sort(function(a,b) {

    if (a.nome > b.nome) {  
        return 1;
    }

    if (a.nome < b.nome) {  
        return -1;
    }

    return 0;
});

todosPacientes.forEach(function(paciente) {
    paciente.imc = calculaIMC(paciente.peso, paciente.altura)

    const pacienteTr =  montaTr(paciente);
    corpoTabela.appendChild(pacienteTr);
});




// FORMAS ALTERNATIVAS **************
// todosPacientesImcCalculados = todosPacientes.map(function (paciente) {
//     return {
//         nome: paciente.nome,
//         peso: paciente.peso,
//         altura: paciente.altura,
//         gordura: paciente.gordura,
//         imc: calculaIMC(paciente.peso, paciente.altura)
//     }
// })

// todosPacientesImcCalculados = todosPacientes.map(function (paciente) {
//     return {
//         ...paciente,
//         imc: calculaIMC(paciente.peso, paciente.altura)
//     }
// })

// todosPacientesImcCalculados.forEach(function(paciente) {
//     // paciente.imc = calculaIMC(paciente.peso, paciente.altura)

//     const pacienteTr =  montaTr(paciente);
//     corpoTabela.appendChild(pacienteTr);
// });