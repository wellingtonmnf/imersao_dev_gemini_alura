function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        // Cria uma div para cada resultado, formatando o título, descrição e link
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank" rel="noopener noreferrer">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui os resultados formatados ao conteúdo da seção
    section.innerHTML = resultados;
}