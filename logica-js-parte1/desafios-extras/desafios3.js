// 1.
let contador = 1;
while (contador < 11) {
  console.log(`Executando a interação, contador: ${contador}`);
  contador++;
}

// 2.
contador = 10;
while (contador >= 0) {
  console.log(`Executando a interação, contador: ${contador}`);
  contador--
}

// 3.
let numero = prompt('Informe um número');
while (numero >= 0) {
  console.log(`Contagem regressiva: ${numero}`);
  numero--;
}

// 4.
numero = prompt('Informe um número entre 1 e 10')
contador = 0
while (contador <= numero) {
  console.log(`Contagem progressiva: ${contador}`)
  contador++
}

// AND (&&)
// OR (||)
// DIFERENTE (!=)
// NEGAÇÃO (!)