// 1.
diaDaSemana = prompt('Qual é o dia da semana?');

if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
  alert('Bom fim de semana!');
} else {
  alert('Boa semana!');
}

// 2.
numero = prompt('Informe um número aleátorio');

if (numero >= 0) {
  alert('Número positivo!');
} else {
  alert('Número negativo!');
}

// 3.
pontuacao = 99;

if (pontuacao >= 100) {
  alert('Você venceu, parabéns!');
} else {
  alert('Tente novamente para ganhar.');
}

// 4.
let saldoDisponivel = 12000.20;
alert(`Saldo em conta: ${saldoDisponivel}`);
// template string - forma de incluir variáveis ou expressões em uma string
// `String ${....}`

// 5.
let nomeUsuario = prompt('Informe seu nome');
let mensagemBoasVindas = 'Seja bem-vindo, ';
alert(mensagemBoasVindas + nomeUsuario);

