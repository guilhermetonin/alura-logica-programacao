/*
1. Crie uma função que aceite uma string como
parâmetro, utilize a função parseInt para
converter essa string em um número inteiro
e retorne o resultado.

2. Escreva um programa de calculadora simples
com funções separadas para adição, subtração,
multiplicação e divisão. Utilize um bloco
condicional para determinar qual função
executar com base em uma variável que
representa a operação desejada.

3. Implemente uma função que aceite um número
como parâmetro e utilize um bloco condicional
para determinar se o número é par ou ímpar.

4. Crie uma função que converta a temperatura de
Celsius para Fahrenheit e vice-versa. Utilize
uma variável para indicar a escala desejada e
um bloco condicional para determinar qual
conversão realizar
*/

// 1.
function converterNumero(str) {
  return parseInt(str);
}

function stringNumero() {
  let texto = '100';
  let numero = converterNumero(texto);
}
stringNumero();


// 2.
function adicao(n1,n2) {
  console.log(`${n1} + ${n2} = ${n1+n2}`);
  return n1+n2;
}
function subtracao(n1,n2) {
  console.log(`${n1} - ${n2} = ${n1-n2}`);
  return n1-n2;
}
function divisao(n1,n2) {
  console.log(`${n1} / ${n2} = ${n1/n2}`);
  return n1/n2;
}
function multiplicacao(n1,n2) {
  console.log(`${n1} x ${n2} = ${n1*n2}`);
  return n1*n2;
}
function calculadora() {
  let numero1 = Number(prompt(`Informe o número 1:`));
  let numero2 = Number(prompt(`Informe o número 2:`));
  let opcao = Number(prompt(`1. ADIÇÃO 2. SUBTRAÇÃO\n3.DIVISÃO 4. MULTIPLICAÇÃO`));
  switch(opcao) {
    case 1:
      adicao(numero1, numero2);
      break;
    case 2:
      subtracao(numero1, numero2);
      break;
    case 3:
      divisao(numero1, numero2);
      break;
    case 4:
      multiplicacao(numero1, numero2);
      break;
    default:
      console.log('opção incorreta.');
      return;
  }
}
calculadora();


// 3.
function validarNumero(n) {
  if (n % 2 == 0) {
    console.log(`${n} é par!`)
  } else {
    console.log(`${n} é impar!`)
  }
}
function numero() {
  let numero = Number(prompt(`Informe um número`));
  validarNumero(numero);
}
numero();


// 4.
function converterCelsius(fahren) {
  let graus = (fahren - 32) * 5/9;
  alert(`${fahren}°F = ${graus}°C`)
  return graus;
}
function converterFahrenheit(graus) {
  let fahren = (graus * 9/5) + 32;
  alert(`${graus}°C = ${fahren}°F`)
  return fahren;
}
function temperatura() {
  alert(`Informar temperatura em\n1. Grau Celsius\n2. Fahrenheit`);
  let opcao = Number(prompt(`Escolha uma opção`));
  let temperatura = 0;
  switch (opcao) {
    case 1:
      temperatura = Number(prompt(`Temperatura em °C:`));
      converterFahrenheit(temperatura);
      break;
    case 2:
      temperatura = Number(prompt(`Temperatura em °F:`));
      converterCelsius(temperatura);
      break;
    default:
      console.log(`Opção incorreta.`);
      return;
  }
}
temperatura();