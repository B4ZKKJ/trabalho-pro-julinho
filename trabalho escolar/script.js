function indisponivel() {
    Swal.fire({
        icon: "error",
        title: "Serviço Indisponivel...",
        text: "",
        footer: '<a href="#">easter egg... vc só pediu a função de add, professor julio....</a>'
    });
}


function y_n_product(valor) {
    const fundo = document.querySelector('.sobretudo')
    const produto = document.querySelector('.addProducts')
    if (valor == 1) {
        fundo.style.display = 'block'
        produto.style.display = 'block'
    } else {
        fundo.style.display = 'none'
        produto.style.display = 'none'
    }

}

function addProdutos() {
    const title = document.getElementById('productTitle').value.trim();
    const description = document.getElementById('productDescription').value.trim();
    const image = document.getElementById('productImage').value.trim();

    if (title && description && image) {
        const productsList = document.querySelector('.products ul');
        const newItem = document.createElement('li');
        newItem.innerHTML = `
                    <div class="item-shop">
                        <img src="${image}" width="100%">
                        <h2><span>${title}</span></h2>
                        <p><span style='word-wrap: break-word;'>${description}</span></p>
                        <button id="addCarrinho" onclick="indisponivel()">Adicionar ao Carrinho</button>
                    </div>
                `;
        productsList.appendChild(newItem);
        document.getElementById('productForm').reset();

        Swal.fire({
            icon: "success",
            title: "Produto Adicionado!",
            text: `${title} foi adicionado à lista de produtos.`,
        });
    } else {
        Swal.fire({
            icon: "warning",
            title: "Erro",
            text: "Por favor, preencha todos os campos.",
        });
    }
}
