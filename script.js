function ativaLetra(elemento){
    if (!elemento) return;
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}


const titulo = document.querySelector('.digitando');
ativaLetra(titulo);

const botaoTema = document.getElementById("theme-toggle");


const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "claro") {
    document.body.classList.add("light-mode");
}

function atualizarBotaoTema() {
    const modoClaro = document.body.classList.contains("light-mode");
    botaoTema.textContent = modoClaro ? "Modo Escuro" : "Modo Claro";
    botaoTema.setAttribute("aria-pressed", String(modoClaro));
}

atualizarBotaoTema();

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    const modoClaro = document.body.classList.contains("light-mode");
    localStorage.setItem("tema", modoClaro ? "claro" : "escuro");

    atualizarBotaoTema();
});


