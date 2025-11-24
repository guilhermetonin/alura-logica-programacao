let texto = document.getElementById('texto-confirmacao');
limparDados();

function enviarDados() {
  nome = document.getElementById('nome').value;
  idade = document.getElementById('idade').value;

  // validação da idade
  if (idade <= 0 || idade > 100) {
    alert('Digite uma idade válida.');
    return
  }
  // validação do nome
  if (nome == '') {
    alert('Faltou digitar o seu nome.')
    return
  }
  // exibe na teal
  alert(`nome: ${nome} idade: ${idade}`);
  console.log(`nome: ${nome} idade: ${idade}`);

  // texto de confirmação
  texto.textContent = 'Dados enviados com sucesso!'

  // cria e exibe os dados que foram enviados
  dados = document.createElement('p');
  dados.textContent = `Nome: ${nome} e Idade: ${idade}`;
  texto.appendChild(dados);
}

// limpa os valores e dados anteriores
function limparDados() {
  texto.textContent = 'Envie seus dados no botão abaixo.';
  nome = document.getElementById('nome').value = '';
  idade = document.getElementById('idade').value = '';
}