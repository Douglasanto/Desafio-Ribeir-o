function fibonacciSequence(num) {
  let a = 0;
  let b = 1;
  let c;

  if (num === 0) {
    return true;
  }

  while (a <= num) {
    if (a === num) {
      return true;
    }
    c = a + b;
    a = b;
    b = c;
  }

  return false;
}

function checkFibonacci(num) {
  if (fibonacciSequence(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }
}

checkFibonacci(13);
checkFibonacci(33);
