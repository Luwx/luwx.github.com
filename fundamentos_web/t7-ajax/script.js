const xhttp = new XMLHttpRequest();

const criaItems = lista => {
    let items = "";
    lista.forEach(item => {
        items += `<li>${item}</li>`
    });
    return items;
}

const gerarClassificacao = idade => {
    console.log(idade);
    switch (idade) {
        case 18:
            return `<div class="classificacao i18">18</div>`;
        case 16:
            return `<div class="classificacao i16">16</div>`;
        case 14:
            return `<div class="classificacao i14">14</div>`;
        case 12:
            return `<div class="classificacao i12">12</div>`;
        case 10:
            return `<div class="classificacao i10">10</div>`;
        case 0:
            return `<div class="classificacao ilivre">livre</div>`;
    }
}

const gerarRating = opinioes => { }

const gerarGeneros = filme => {
    return filme.generos.forEach
}

const gerarLista = (filmeLista, filme) => {
    return `
    <div class="movie-card">
            <div class="card-header">
j                <div class="poster"><img class="poster-img" src="${filme.figura}" alt="Poster"></div>
                <div class="card-header-content">
                    <h2 class="title">${filme.titulo}</h2>
                    <span class="categories">${filme.generos.join(', ')}</span>
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
            <p class="resumo">${filme.resumo}</p>
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
        divCatalogo.innerHTML += gerarLista(receitaLista, receita);

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
