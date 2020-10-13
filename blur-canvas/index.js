const dprDiv = document.querySelector('#dpr');
const blurCanvas = document.querySelector('#blur');
const clearCanvas = document.querySelector('#clear');

const DPR = window.devicePixelRatio;
if (DPR < 2) {
  dprDiv.textContent = `window.devicePixelRatio = ${DPR}，Zoom in 到 200% 再重新整理`;
} else {
  dprDiv.textContent = `window.devicePixelRatio = ${DPR}`;
}

const SIZE = 200;
blurCanvas.width = SIZE;
blurCanvas.height = SIZE;
clearCanvas.width = SIZE;
clearCanvas.height = SIZE;

setupClearCanvas(clearCanvas);
draw(blurCanvas);
draw(clearCanvas);

function setupClearCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = Math.floor(SIZE * DPR);
  canvas.height = Math.floor(SIZE * DPR);
  ctx.scale(DPR, DPR);
}

function draw(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, SIZE, SIZE);
  ctx.fillStyle = '#fff';
  ctx.font = '200px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const x = SIZE / 2;
  const y = SIZE / 2;

  const textString = 'C';
  ctx.fillText(textString, x, y);
}
