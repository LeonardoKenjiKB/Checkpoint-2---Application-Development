const grid = document.querySelector(".grid-atores");
const campoBusca = document.querySelector(".busca");
const contador = document.querySelector(".contador");



function renderizarAtores(lista){
    grid.innerHTML = "";
    
    lista.forEach((ator) => {
        grid.innerHTML += ` 
         <div class="atores">
            <img src="${ator.foto}" alt="${ator.nome}" >
            <div class="info">
                <h2>${ator.nome}</h2>
                <p>${ator.pais} · ${ator.nascimento}</p>
            </div>
         </div>     
        `;      
    });

    contador.textContent = `${lista.length} de ${atores.length} atores`;
}

function aplicarFiltro(){
    const termo = campoBusca.value.toLowerCase();

    const atoresFiltrados = atores.filter(ator => {
        return ator.nome.toLowerCase().includes(termo);
    });

    renderizarAtores(atoresFiltrados);
}

renderizarAtores(atores);

