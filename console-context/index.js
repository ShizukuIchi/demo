const iframe = document.querySelector('iframe');
window.onmessage = (message) => {
  console.log('iframe -> Main:', message.data);
};
document.querySelector('#send').onclick = () => {
  const input = document.querySelector('#message');
  const iframe = document.querySelector('iframe');
  iframe.contentWindow.postMessage(input.value);
};
