const clear = document.querySelector('#clear');
const tainted = document.querySelector('#tainted');

const IMG_SRC = 'https://i.imgur.com/EW1jRld.png';

function drawImg() {
  const context = clear.getContext('2d');
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
    context.drawImage(this, 0, 0);
    console.log(context.getImageData(0, 0, this.width, this.height));
  };
  img.src = IMG_SRC;
}
function drawImgTainted() {
  const context = tainted.getContext('2d');
  const img = new Image();
  img.onload = function() {
    context.drawImage(this, 0, 0);
    console.log(context.getImageData(0, 0, this.width, this.height));
  };
  img.src = IMG_SRC;
}
function toDataURL() {
  document.querySelector('#img').src = clear.toDataURL();
}
function toDataURLTainted() {
  document.querySelector('#img2').src = tainted.toDataURL();
}
