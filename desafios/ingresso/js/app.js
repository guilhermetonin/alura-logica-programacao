function comprar() {
  let tipo = document.getElementById('tipo-ingresso').value;
  let quantidade = parseInt(document.getElementById('qtd').value);
  console.log(`tipo: ${tipo} | qtde ${quantidade}`);
  comprarIngresso(tipo, quantidade);
}

function comprarIngresso(nome, qtde) {
  let estoque = parseInt(document.getElementById(`qtd-${nome}`).textContent);

  if (qtde > estoque) {
    alert(`Quantidade indisponível para o tipo ${nome}.`);
  } else {
    alert(`Compra realizada com sucesso.`);
    estoque = estoque - qtde;
    document.getElementById(`qtd-${nome}`).textContent = estoque;
  }
}