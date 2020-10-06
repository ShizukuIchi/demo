let array;
let dom;

function createArray(n = 1000000) {
  return new Array(n).fill('Hello World!');
}
function appendArray() {
  if (Array.isArray(array)) {
    array = array.concat(createArray());
  } else {
    array = createArray();
  }
}

function clearArray() {
  array = undefined;
}

function createDOM() {
  return createArray(100).map((text) => {
    const node = document.createElement('div');
    node.textContent = text;
    return node;
  });
}

function appendDOM() {
  const container = document.querySelector('.dom-container');
  if (!dom) {
    dom = document.createElement('div');
  }
  const doms = createDOM();
  dom.append(...doms);
  container.appendChild(dom);
}

function removeDOM() {
  if (dom) dom.remove();
}
function clearDOM() {
  removeDOM();
  dom = undefined;
}

const $ = document.querySelector.bind(document);
$('#array').textContent = createArray;
$('#appendArr').textContent = appendArray;
$('#clearArr').textContent = clearArray;
$('#DOM').textContent = createDOM;
$('#appendDOM').textContent = appendDOM;
$('#removeDOM').textContent = removeDOM;
$('#clearDOMVariable').textContent = clearDOM;
