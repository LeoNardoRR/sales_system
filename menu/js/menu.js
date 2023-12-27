let contadorItens = 0;

function adicionarItem() {
  contadorItens++;
  atualizarQuantidadeItens();
  atualizarListaItens();
}

function subtrairItem() {
  if (contadorItens > 0) {
    contadorItens--;
    atualizarQuantidadeItens();
    atualizarListaItens();
  }
}

function atualizarQuantidadeItens() {
  var quantidadeItensElement = document.getElementById("quantidadeItens");
  quantidadeItensElement.textContent = contadorItens;
}

function atualizarListaItens() {
  var listaItens = document.getElementById("listaItens");

  listaItens.innerHTML = "";

  for (var i = 1; i <= contadorItens; i++) {
    var novoItem = document.createElement("li");
    novoItem.textContent = "Item " + i;
    listaItens.appendChild(novoItem);
  }
}
let quantidadeItens = null;
const precoUnitario = 50.0;

function adicionarItem() {
  quantidadeItens++;
  atualizarQuantidadeEPreco();
}

function subtrairItem() {
  if (quantidadeItens > 0) {
    quantidadeItens--;
    atualizarQuantidadeEPreco();
  }
}

function atualizarQuantidadeEPreco() {
  const quantidadeElement = document.getElementById("quantidadeItens");
  const precoElement = document.getElementById("precoProduto");

  quantidadeElement.textContent = quantidadeItens;
  precoElement.textContent = `R$${(quantidadeItens * precoUnitario).toFixed(
    2
  )}`;
}

function salvarItem() {
  // Adicione aqui qualquer lógica adicional para salvar o item, se necessário
  console.log(
    `Item salvo: Quantidade=${quantidadeItens}, Preço Total=R$${(
      quantidadeItens * precoUnitario
    ).toFixed(2)}`
  );
}
