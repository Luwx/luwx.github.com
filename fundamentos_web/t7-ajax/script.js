const xhttp = new XMLHttpRequest();

const criaItems = lista => {
    let items = "";
    lista.forEach(item => {
        items += `<li>${item}</li>`
    });
    return items;
}

const gerarClassificacao = idade => { }

const gerarRating = opinioes => { }

const gerarGeneros = filme => {

    return filme.generos.forEach
}

const gerarLista = filme => {
    return `
    <div class="movie-card">
            <div class="card-header">
                <img src="${filme.figura}" alt="Poster">
                <div class="card-header-content">
                    <h2 class="title">${filme.titulo}</h2>
                    <span class="categories">${filme.generos.join(' ')}</span>
                    <div class="elenco-section">
                        <span class="elenco-title">Elenco</span>
                        <span>${filme.elenco.join(', ')}</span>
                    </div>
                </div>
                <div class="content-and-rating-container">
                    <div class="classificacao"> ${gerarClassificacao(filme.classificacao)} </div>
                    <div class="rating">${gerarRating(filme.opinioes)}</div>
                </div>
            </div>
            <p>${filme.resumo}</p>
            <div class="card-footer">
                <h3>Títulos similares</h3>
                <div class="images">
                    <img src="" alt="movie">
                </div>
            </div>
        </div>
     `;
}

const carregarFilmes = (receitaLista, seletorCatalogo) => {
    const divCatalogo = document.querySelector(seletorCatalogo)

    receitaLista.forEach(receita => {
        divCatalogo.innerHTML += gerarLista(receita);

    });
}


xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        let filmesList = JSON.parse(this.responseText);
        console.log(filmesList);

        carregarFilmes(filmesList, ".catalogo")
    }
}

xhttp.open("GET", "https://rafaelescalfoni.github.io/desenv_web/filmes.json")
xhttp.send();
