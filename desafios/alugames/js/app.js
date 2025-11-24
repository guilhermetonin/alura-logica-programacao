let jogosAlugados = 1;

function alterarStatus(id){
  let jogoEscolhido = document.getElementById(`game-${id}`);
  let imagem = jogoEscolhido.querySelector('.dashboard__item__img');
  let botao = jogoEscolhido.querySelector('.dashboard__item__button');

  // botao
  let confirmacao = prompt(`Digite 'CONFIRMAR' para realizar a ação.`);
  if (confirmacao === 'CONFIRMAR') {
    if (botao.classList.contains('dashboard__item__button--return')) {
      imagem.classList.remove('dashboard__item__img--rented');
      botao.classList.remove('dashboard__item__button--return');
      botao.textContent = 'Alugar';
      jogosAlugados--;
    } else {
      botao.textContent = 'Devolver';
      botao.classList.add('dashboard__item__button--return');
      imagem.classList.add('dashboard__item__img--rented');
      jogosAlugados++;
      console.log(`JOGOS ALUGADOS: ${jogosAlugados}`);
    }   
  } else { 
    alert('Texto incorreto, ação cancelada.');
    return;
  }
}