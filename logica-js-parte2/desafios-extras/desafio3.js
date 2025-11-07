// 1.
let altura = 1.73;
let peso = 60;
function CalcularIMC(altura,peso) {
  let imc = peso / (altura * altura);
}
let imc = CalcularIMC(altura,60);
console.log(`1. Seu IMC: ${imc}`);

// 2.
let numero = 7;
function calcularFatorial(numero) {
  let multiplicador = numero;
  let resultado = 1;
  while (multiplicador > 1) {
    resultado = resultado * multiplicador;
    multiplicador--;
  }
  return (resultado);
}
let fatorado = calcularFatorial(numero);
console.log(`2. Fatorial de ${numero} é ${fatorado}`);

// 3.
let cotacao = Number(prompt('Informe a cotação do dólar atual')).toFixed(2);
let valor = Number(prompt('Informe o valor em dólar')).toFixed(2);
let reais = ConverterParaReais(valor,cotacao).toFixed(2);
function ConverterParaReais(dolar,cotacao) {
  return (dolar * cotacao);
}
console.log(`U$ ${valor} com a cotação em R$ ${cotacao} é R$ ${reais}`);

// 4.
let b = 10.50
let h = 5
let retangulo = calcularSalaRetangular(b,h);
function calcularSalaRetangular(base,altura) {
  let area = base * altura;
  let perimetro = 2 * (base + altura);
  return {
    'Área': area,
    'Perímetro': perimetro
  }
}
console.log(`Área da sala retangular: ${retangulo['Área']}`);
console.log(`Perímetro da sala retangular: ${retangulo['Perímetro'].toFixed(2)}`);

// 5.
let raio = 10;
const pi = 3.14;
let circulo = calcularSalaCircular(raio);
function calcularSalaCircular(raio) {
  let area = pi * (raio * raio);
  let perimetro = 2 * pi * raio;
  return {
    'Área': area,
    'Perímetro': perimetro
  }
}
console.log(`Área da sala circular: ${circulo['Área']}`);
console.log(`Perímetro da sala circular: ${circulo['Perímetro'].toFixed(2)}`);

// 6.
let n = 8
calcularTabuada(n);
function calcularTabuada(numero) {
  let multiplicador = 1
  console.log(`TABUADA DO ${numero}:`)
  while (multiplicador < 11) {
    console.log(`${numero} * ${multiplicador} = ${numero * multiplicador}`)
    multiplicador++
  }
}
