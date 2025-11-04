let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function executarConsole() {
  console.log('O botão foi clicado');
}

function executarAlert() {
  alert('Eu amo JS');
}

function executarPrompt() {
  let cidade = prompt('Informe um nome de uma cidade no Brasil');
  alert(`Estive em ${cidade} e lembrei de você`);
}

function somarValores() {
  let numero1 = parseInt(prompt('Informe o primeiro número inteiro'));
  let numero2 = parseInt(prompt('Informe o segundo número inteiro'));
  let total = numero1 + numero2;
  alert(`${numero1} + ${numero2} resultou em ${total}`);
}