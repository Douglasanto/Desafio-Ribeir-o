function inverterString(str) {
  let invertedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertedString += str[i];
  }
  return invertedString;
}

// Teste
const minhaString = "Olá, mundo!";
const stringInvertida = inverterString(minhaString);
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);
