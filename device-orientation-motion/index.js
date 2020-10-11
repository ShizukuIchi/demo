const spans = document.querySelectorAll('span');
const [alpha, beta, gamma, ax, ay, az] = spans;

window.addEventListener(
  'deviceorientation',
  function(event) {
    alpha.textContent = event.alpha;
    beta.textContent = event.beta;
    gamma.textContent = event.gamma;
  },
  true,
);

window.addEventListener('devicemotion', function(event) {
  console.log('hi', event.acceleration, event.accelerationIncludingGravity);
  const { x, y, z } = event.acceleration;
  ax.textContent = `${x} m/s2`;
  ay.textContent = `${y} m/s2`;
  az.textContent = `${z} m/s2`;
});
