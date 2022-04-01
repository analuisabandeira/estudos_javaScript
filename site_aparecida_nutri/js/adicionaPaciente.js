const corpoTabela = document.querySelector("#tabela-pacientes");

const paciente = document.querySelectorAll(".paciente");

// Montei um array com todos os pacientes, cada paciente é um objeto JS e tem propriedades que são comuns entre todos; 

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

function renderizarTabela() {

    // Antes de adicionar o paciente à tabela, a ordeno por ordem alfabética através do método .sort() que recebe como parâmetro dois elementos (a,b) que serão comparados e o de menor índice sera apresentado em preferência. 

    todosPacientes.sort(function (a, b) {

        if (a.nome > b.nome) {
            return 1;
        }

        if (a.nome < b.nome) {
            return -1;
        }
        return 0;
    });

    // Itero pelo array que contém todos os pacientes e monto suas tr's, adicionando-os à tabela :)

    todosPacientes.forEach(function (paciente) {

        paciente.imc = calculaIMC(paciente.peso, paciente.altura);

        const pacienteTr = montaTr(paciente);
        corpoTabela.appendChild(pacienteTr);
    });

}

renderizarTabela();


// **** FORMAS ALTERNATIVAS DE CALCULAR O IMC DO OBJETO ****

// 1º) UTILIZANDO O LOOP .MAP

// O loop .map itera por todo o array, devolvendo um array com o mesmo número de elementos, mas com informações atualizadas - como um IMC calculado.

// =====> VEJA:

// todosPacientesImcCalculados = todosPacientes.map(function (paciente) {
//     return {
//         nome: paciente.nome,
//         peso: paciente.peso,
//         altura: paciente.altura,
//         gordura: paciente.gordura,
//         imc: calculaIMC(paciente.peso, paciente.altura)
//     }
// })

// ====> OU:

// todosPacientesImcCalculados = todosPacientes.map(function (paciente) {
//     return {
//         ...paciente, *esses "..." indicam que o que vem antes vai ficar inalterado
//         imc: calculaIMC(paciente.peso, paciente.altura) *a alteração seria só no IMC ^^
//     }
// })


// Depois iteramos com o loop forEach através do array com os pacientes com IMC's calculados e adicionamos estes na tabela :)

// todosPacientesImcCalculados.forEach(function(paciente) {
//     // paciente.imc = calculaIMC(paciente.peso, paciente.altura)

//     const pacienteTr =  montaTr(paciente);
//     corpoTabela.appendChild(pacienteTr);
// });