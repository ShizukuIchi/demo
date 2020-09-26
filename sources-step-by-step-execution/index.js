function startStep() {
  const number = 3;
  const result = double(number); // A
  console.log(result); // D

  function double(n) {
    const result = n * 2; // B
    return result; // C
  }
}

function startStepAsync() {
  setTimeout(() => console.log(1), 2000); // A
  console.log(2); // B
  console.log(3); // C
}

function startStepThreads() {
  new Worker('worker.js'); // A
  console.log('Hello World!'); // B
}
