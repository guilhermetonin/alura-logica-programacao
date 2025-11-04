// 1.
console.log(`Boas-vindas!`);

// 2.
let nome = 'Guilherme';
console.log(`Olá, ${nome}`);

// 3.
alert(`Olá, ${nome}`)

// 4.
let opiniao = prompt('Qual é a linguagem de programação que você mais gosta?');
console.log(`Resposta: ${opiniao}`);

// 5.
let valor1 = 12;
let valor2 = 33;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// 6.
valor1 = 5;
valor2 = 5;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

// 7.
let idade = prompt('Informe a sua idade');
if (idade > 0) {
  console.log(`${idade} é positivo.`);
} else if (idade < 0) {
  console.log(`${idade} é negativo.`);
} else {
  console.log(`${idade} é zero.`);
}

// 8.
contador = 1;
while (contador < 11) {
  console.log(`Número ${contador}`);
  contador++;
}

// 9.
let nota = 9.5;
if (nota >= 7) {
  console.log('Aprovado!');
} else {
  console.log('Reprovado!');
}

// 10.
let numero = Math.random();
console.log(numero);

// 11.
numero = parseInt(Math.random() * 10 + 1);
console.log(numero);

// 12.
numero = parseInt(Math.random() * 1000 + 1);
console.log(numero);

