/*
3. Crie um programa que verifica se uma palavra ou frase é um palíndromo.

4. Crie um programa com uma função que receba três números como
argumentos e os retorne em ordem crescente. Exiba os números ordenados.
*/

// 3.
let texto = prompt('Informe uma palavra ou frase').toUpperCase();
let palindromo = texto.trim().split('').reverse().join('').toUpperCase();

if (texto === palindromo) {
  console.log(`O texto: '${texto}' É SIM palíndromo.`)
} else {
  console.log(`O texto: '${texto}' NÃO É palíndromo.`)
}

// 4.
// metodo bubble sort
function ordenarCrescente(vet) {
  for (let i = 0; i < vet.length; i++) {
    for (let j = 0; j < vet.length - 1 - i; j++) {
      if (vet[j] > vet[j+1]) {
        let aux = vet[j];
        vet[j] = vet[j+1];
        vet[j+1] = aux;
      }
    }
  }
}

let vetor = [];
for (let i = 0; i < 3; i++) {
  let numero = parseInt(Math.random() * 10 + 1);
  vetor.push(numero);
}
console.log(`vetor antes: ${vetor}`);
ordenarCrescente(vetor);
console.log(`vetor depois: ${vetor}`);