const xhttp = new XMLHttpRequest();
 
const criaItems = lista => {
    let items = "";
    lista.forEach(item => {
        items += `<li>${item}</li>`
    });
    return items;
}
 
const gerarGeneros = filme => {
 
    return filme.generos.forEach
}
 
const gerarLista = listaFilmes => {
    let lista = [];
    listaFilmes.forEach(filme => {
 
    })
        lista += `
 
        <div class="movie-card">
                <div class="card-header">
                    <img src="${filme.figura}" alt="Poster">
                    <div class="card-header-content">
                        <h2 class="title">${filme.titulo}</h2>
                        <span class="categories">Series series americanas</span>
                        <div class="elenco-section">
                            <span class="elenco-title">Elenco</span>
                            <span>Jonh smith, ....</span>
                        </div>
                    </div>
                    <div class="content-and-rating-container">
                        <div class="classificacao"> 18 </div>
                        <div class="rating"></div>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem tenetur quaerat consectetur aut nesciunt, in facilis similique explicabo corrupti dolore a laborum nobis id. Nobis harum reprehenderit nulla autem incidunt!</p>
                <div class="card-footer">
                    <h3>Títulos similares</h3>
                    <div class="images">
                        <img src="" alt="movie">
                    </div>
                </div>
            </div>
         `;        
}
 
const carregarReceitas = (receitaLista, seletorCatalogo) => {
    const divCatalogo = document.querySelector(seletorCatalogo)
 
    receitaLista.forEach(receita => {
        divCatalogo.innerHTML += gerarItem(receita);
 
    });
}
 
 
xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        // recuperar receitas
 
        let filmesList = JSON.parse(this.responseText);
        console.log(filmesList);
 
        carregarReceitas(filmesList, ".catalogo")
    }
}
 
xhttp.open("GET","https://rafaelescalfoni.github.io/desenv_web/filmes.json")
xhttp.send();
