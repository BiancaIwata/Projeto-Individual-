// array para armazenar os filmes disponíveis
let filmes = [
    `<div class="div-filme" onclick="selecionarFilme(1, this)">
        <img src="./assets/filmes/Nausicaa.jpeg">
        <p>Nausicaä do Vale do Vento (1984)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(2, this)">
        <img src="./assets/filmes/Castle in the sky.jpeg">
        <p>O Castelo no Céu (1986)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(3, this)">
        <img src="./assets/filmes/Totoro.jpeg">
        <p>Meu Amigo Totoro (1988)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(4, this)">
        <img src="./assets/filmes/Hotaru no haka.jpeg">
        <p>Túmulo dos Vagalumes (1988)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(5, this">
        <img src="./assets/filmes/Kiki's delivery service.jpeg">
        <p>O Serviço de Entregas da Kiki (1989)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(6, this)">
        <img src="./assets/filmes/Only Yesterday.jpeg">
        <p>Memórias de Ontem (1991)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(7, this)">
        <img src="./assets/filmes/Porco Rosso.jpeg">
        <p>Porco Rosso: O Último Herói Romântico (1992)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(8, this)">
        <img src="./assets/filmes/Ocean Waves.jpeg">
        <p>Eu Posso Ouvir o Oceano (1993)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(9, this)">
        <img src="./assets/filmes/Pom Poko.jpeg">
        <p>PomPoko: A Grande Batalha dos Guaxinins (1994)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(10, this)">
        <img src="./assets/filmes/Whisper.jpeg">
        <p>Sussurros do Coração (1995)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(11, this)">
        <img src="./assets/filmes/Mononoke.jpeg">
        <p>Princesa Mononoke (1997)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(12, this)">
        <img src="./assets/filmes/Spirited Away.jpeg">
        <p>A Viagem de Chihiro (2001)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(13, this)">
        <img src="./assets/filmes/The Cat Returns.jpeg">
        <p>O Reino dos Gatos (2002)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(14, this)">
        <img src="./assets/filmes/Howl's Moving Castle.jpeg">
        <p>O Castelo Animado (2004)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(15, this)">
        <img src="./assets/filmes/Tales From Earthsea.jpeg">
        <p>Contos de Terramar (2006)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(16, this)">
        <img src="./assets/filmes/Ponyo.jpeg">
        <p>Ponyo: Uma Amizade Que Veio do Mar (2008)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(17, this)">
        <img src="./assets/filmes/Arrietty.jpeg">
        <p>O Mundo dos Pequeninos (2010)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(18, this)">
        <img src="./assets/filmes/From Up on Poppy Hill.jpeg">
        <p>Da Colina Kokuriko (2011)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(19, this)">
        <img src="./assets/filmes/Wind.jpeg">
        <p>Vidas ao Vento (2013)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(20, this)">
        <img src="./assets/filmes/Kaguya.jpeg">
        <p>O Conto da Princesa Kaguya (2013)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(21, this)">
        <img src="./assets/filmes/As Memórias de Marnie.jpeg">
        <p>As Memórias de Marnie (2014)</p>
    </div>`,

    `<div class="div-filme" onclick="selecionarFilme(22, this)">
        <img src="./assets/filmes/The Boy and the Heron.jpeg">
        <p>O Menino e a Garça (2023)</p>
    </div>`
]

// variáveis para armazenar quantaos filmes terão em cada página 
// e cálculo para quantidade de páginas
let filmePorPagina = 4;
let qtdPaginas = (filmes.length / filmePorPagina).toFixed();


let divPaginacao = document.getElementById("div_paginacao");

// for para colocar paginação dos filmes 
for (let index = 0; index < qtdPaginas; index++) {
    let paginacao = document.createElement("div");
    paginacao.innerHTML = index + 1;
    divPaginacao.appendChild(paginacao); // inserindo div de cada página na div pai

    if (paginacao.innerHTML == 1) {
        paginacao.classList.add("destaque-paginacao");
    }

    // atribuindo função onclick em cada elemento
    paginacao.setAttribute("onclick", `trocarPaginaSelecionada(${index + 1}, this)`);
}

let divFilmes = document.getElementById("div_filmes");

// for para inserir filmes no HTML (ocorre quando a página é carregada)
for (let index = 0; index < filmePorPagina; index++) {
    let filme = filmes[index];

    divFilmes.innerHTML += filme;
}


function trocarPaginaSelecionada(paginaSelecionada, elemento) {
    // tirando destaque de todos elementos e adicionando apenas no selecionado
    for (let index = 0; index < divPaginacao.childNodes.length; index++) {
        divPaginacao.childNodes[index].classList.remove("destaque-paginacao")
    }
    elemento.classList.add("destaque-paginacao");

    let paginaAtual = paginaSelecionada;
    let indexInicial = (paginaAtual - 1) * filmePorPagina;
    let indexFinal = indexInicial + filmePorPagina;

    divFilmes.innerHTML = '';

    // inserindo filmes em cada página conforme filmePorPagina
    for (let index = indexInicial; (index < indexFinal && index < filmes.length); index++) {
        let filme = filmes[index];
        divFilmes.innerHTML += filme;
    }
}

let filme = 0;

// armazenando filme selecionado e adicionando destaque 
function selecionarFilme(idFilme, elemento) {
    filme = idFilme;

    for (let index = 0; index < divFilmes.childNodes.length; index++) {
        divFilmes.childNodes[index].classList.remove("destaque-filme")
    }
    elemento.classList.add("destaque-filme");
}

function enviarComentario() {
    if (filme == 0 || txtComentario.value == '' || selEmocao.value == '#' || selImpacto.value == '#') {
        alert('Verifique se todos os campos estão preenchidos e selecionados!');
        return false;
    }

    var usuarioVar = sessionStorage.ID_USUARIO;
    var filmeVar = filme;
    var comentarioVar = txtComentario.value;
    var emocaoVar = selEmocao.value;
    var intensidadeVar = selImpacto.value;

    fetch("/comentarios/enviar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            usuarioServer: usuarioVar,
            filmeServer: filmeVar,
            comentarioServer: comentarioVar,
            emocaoServer: emocaoVar,
            intensidadeServer: intensidadeVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert('Envio realizado com sucesso!');

            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}