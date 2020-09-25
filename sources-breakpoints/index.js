function line() {
  console.log(conCat(createArray(10).map((_, i) => i + 1)));
}

function catAndDogs() {
  const array = createArray(10).fill('dog');
  array[random(10)] = 'cat';
  array.forEach((str) => fetch(str).then((r) => r.text().then(console.log)));
}

function conCat(toConcat, n = 1) {
  const cats = Array(n).fill('🐱');
  if (Array.isArray(toConcat)) {
    return [...toConcat, ...cats];
  }
  return toConcat + cats.join('');
}

function createArray(n = 1) {
  return Array(n).fill();
}

function random(max) {
  return Math.floor(Math.random() * max);
}

// DOM: keep changing color
(function() {
  const element = document.querySelector('#dom');
  setInterval(() => {
    const r = random(256);
    const g = random(256);
    const b = random(256);
    element.style.color = `rgb(${r}, ${g}, ${b})`;
  }, 200);
})();

// Event listener
(function() {
  const dropdown = document.querySelector('.dropdown input');
  const list = document.querySelector('.list');
  list.onmousedown = (e) => {
    dropdown.value = e.target.textContent;
    console.log(`You chose ${e.target.textContent}!`);
  };
  dropdown.onfocus = () => {
    dropdown.parentElement.appendChild(list);
    list.style.display = 'block';
  };
  dropdown.onblur = () => {
    list.remove();
    list.style.display = 'none';
  };
})();
