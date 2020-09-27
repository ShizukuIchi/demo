var a = 'a';
const b = 'b';
function outer() {
  const c = 'c';
  function inner() {
    const d = 'd';
    if (true) {
      const e = 'e';
      console.log(a, b, c, d, e); // 👈
    }
  }
  inner();
}
outer();

function hello() {
  let message = 'Hello'; // A
  function world() {
    message = message + ' World'; // C 👈
    console.log(message);
  }
  world(); // B
}

function blackbox() {
  lib(); // 👈
  console.log('Hello World!');
}

(function() {
  document.querySelector('#scope').textContent = `var a = 'a';
  const b = 'b';
  function outer() {
    const c = 'c';
    function inner() {
      const d = 'd';
      if (true) {
        const e = 'e';
        console.log(a, b, c, d, e); // 👈
      }
    }
    inner();
  }
  outer();`;
  document.querySelector('#callStack').textContent = hello;
  document.querySelector('#blackbox').textContent = blackbox;
})();
