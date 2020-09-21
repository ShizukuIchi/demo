function add(a, b) {
  return a + b;
}
function double(a) {
  return a * 2;
}

function onClickBtn(event) {
  console.log(event.target.textContent);
}

function onClickDebugBtn() {
  console.log('debugging...');
}

let shouldEcho = false;
function echo() {}
setInterval(() => {
  if (shouldEcho) echo(performance.now());
}, 1000);
function onClickMonitorBtn(event) {
  shouldEcho = !shouldEcho;
  event.target.textContent = shouldEcho ? 'Stop' : 'Start';
}

function meow() {
  const node = document.querySelector('#meow');
  node.textContent = 'Meow~';
  setTimeout(() => {
    node.textContent = '';
  }, 300);
}
