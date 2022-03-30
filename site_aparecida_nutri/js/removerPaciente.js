var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

    alvoEvento = event.target;
    paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.classList.add("fade-out");

    setTimeout (function() {

        paiDoAlvo.remove();

    }, 500);    
});
