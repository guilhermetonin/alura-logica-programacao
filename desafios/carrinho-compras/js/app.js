let precoTotal; // acumulador dos valores do carrinho
limpar(); // limpa todos os campos quando inicia

function adicionar() {
  // recupera valores do produto e quantidade
  let produto = document.getElementById('produto').value;
  let quantidade = document.getElementById('quantidade').value;
  
  if (quantidade <= 0) {
    alert('Erro. Insira uma quantidade acima de 0');
    return;
  }

  // nome do produto e preço
  let nomeProduto = produto.split('-')[0];
  let precoProduto = parseFloat(produto.split('R$')[1]);

  // preço a pagar
  let precoFinal = precoProduto * quantidade;

  // adicionar produto ao carrinho de compras
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoFinal}</span>
        </section>`; // atualiza na tela

  // preço total do carrinho
  let total = document.getElementById('valor-total');
  precoTotal += precoFinal;
  total.textContent = `R$${precoTotal}`; // atualiza na tela

  // limpa a quantidade após adicionar
  document.getElementById('quantidade').value = '';
}

function limpar() {
  precoTotal = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$0,00';
}