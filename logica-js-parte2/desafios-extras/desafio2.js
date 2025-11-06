// 1.
function exibirOlaMundo() {
  console.log('1. Olá, mundo!');
}
exibirOlaMundo();

// 2. 
let nome = 'Guilherme';
function saudacao(nome) {
  console.log(`2. Olá, ${nome}`);
}
saudacao(nome);

// 3.
let numero = 5;
function dobrarNumero(numero) {
  return (numero * 2);
}
let numeroDobrado = dobrarNumero(numero);
console.log(`3. Número dobrado: ${numeroDobrado}`);

// 4.
let n1 = 10;
let n2 = 20;
let n3 = 30;

function calcularMedia(numero1,numero2,numero3) {
  let total = numero1 + numero2 + numero3;
  let media = total / 3;
  return (media);
}
let media = calcularMedia(n1,n2,n3);
console.log(`4. Média: ${media}`);

// 5.
function verificarMaiorNumero(numero1,numero2) {
  let maior = 0;
  if (numero1 > numero2) {
    maior = numero1;
  } else if (numero2 > numero1) {
    maior = numero2;
  } else {
    console.log(`O ${numero1} e ${numero2} são iguais`);
  }
  return (maior);
}
let maiorNumero = verificarMaiorNumero(n1,n2);
console.log(`5. Maior número é ${maiorNumero}`);

// 6.
function calcularPotencia(numero) {
  return (numero * numero);
}
let potencia = calcularPotencia(numero);
console.log(`6. Multiplicação por ele mesmo: ${potencia}`);