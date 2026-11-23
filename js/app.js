
const inicio = document.getElementById("inicio");
const conteudo = document.getElementById("conteudo");
const conteudoSecao = document.getElementById("conteudo-secao");

function abrirSecao(secao) {
    inicio.classList.add("oculto");
    conteudo.classList.remove("oculto");

    if (secao === "cartas") {
        mostrarCartas();
        return;
    }

    const secoes = {
        velas: "Significados das velas",
        tiragens: "Métodos de tiragem",
        anotacoes: "Minhas anotações",
        umbanda: "Umbanda",
        candomble: "Candomblé"
    };

    const nome = secoes[secao];

    conteudoSecao.innerHTML = `
        <h2>${nome}</h2>
        <p>Conteúdo desta seção será adicionado em breve.</p>
    `;
}

function voltarInicio() {
    conteudo.classList.add("oculto");
    inicio.classList.remove("oculto");
    conteudoSecao.innerHTML = "";
    window.scrollTo(0, 0);
}

function mostrarCartas() {
    conteudoSecao.innerHTML = `
        <h2>As 36 cartas do Baralho Cigano</h2>
        <p>Escolha uma carta para consultar seus significados.</p>
        <div id="lista-cartas" class="grade-cartas"></div>
    `;

    const lista = document.getElementById("lista-cartas");

    cartas.forEach(carta => {
        const botao = document.createElement("button");
        botao.className = "carta";

        botao.innerHTML = `
            <span>${carta.numero}</span>
            <strong>${carta.nome}</strong>
        `;

        botao.addEventListener("click", () => abrirCarta(carta));
        lista.appendChild(botao);
    });
}

function abrirCarta(carta) {
    conteudoSecao.innerHTML = `
        <h2>${carta.numero} - ${carta.nome}</h2>

        <div class="secao-significado">
            <h3>Palavras-chave</h3>
            <p>${carta.palavras}</p>
        </div>

        <div class="secao-significado">
            <h3>Significado geral</h3>
            <p>${carta.significado}</p>
        </div>

        <div class="secao-significado">
            <h3>Amor</h3>
            <p>${carta.amor}</p>
        </div>

        <div class="secao-significado">
            <h3>Trabalho</h3>
            <p>${carta.trabalho}</p>
        </div>

        <div class="secao-significado">
            <h3>Espiritualidade</h3>
            <p>${carta.espiritualidade}</p>
        </div>

        <div class="secao-significado">
            <h3>Conselho</h3>
            <p>${carta.conselho}</p>
        </div>

        <button id="voltar-cartas">← Voltar às cartas</button>
    `;

    document.getElementById("voltar-cartas").addEventListener("click", mostrarCartas);
    window.scrollTo(0, 0);
}

