alert('Bem-Vindo, ao jogo do Número Secreto');

let numeroMax = 100; // define o número maximo
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log(`Número secreto: ${numeroSecreto}`);

let chute;
let tentativas = 1;

// enquanto chute não for igual ao n. secreto
while (chute != numeroSecreto) {
  chute = prompt(`Informe um número de 0 a ${numeroMax}`);
  console.log(`Número informado: ${chute}`);

  // se o chute for igual ao n. secreto
  if (chute == numeroSecreto) {
    break; // encerra a execução
  } else { // senão
    if (chute > numeroSecreto) {
      alert(`Número secreto é MENOR que ${chute}`);
    } else {
      alert(`Número secreto é MAIOR que ${chute}`);
    }
    tentativas++;
  }
}

// operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`ACERTOU! O número era ${numeroSecreto} e teve ${tentativas} ${palavraTentativa}`);
console.log(`ACERTOU! O número era ${numeroSecreto} e teve ${tentativas} ${palavraTentativa}`);