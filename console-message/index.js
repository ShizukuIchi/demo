const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
function groupSimilar() {
  for (let i = 10; i--; ) console.log('similar');
}
async function openWindow(s = 0) {
  const button = document.querySelector(`#openWindow${s}`);
  const originText = button.textContent;
  for (let i = s; i--; ) {
    button.textContent = `${i + 1}s`;
    await sleep(1000);
  }
  window.open();
  button.textContent = originText;
}

function fetch404() {
  fetch('https://sh1zuku.csie.io/demo/400000000004');
}

function reload() {
  window.location.reload();
}
