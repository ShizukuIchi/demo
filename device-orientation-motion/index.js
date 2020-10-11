const spans = document.querySelectorAll('span');
const [alpha, beta, gamma, ax, ay, az] = spans;
function listenOrientation() {
  if (DeviceOrientationEvent) {
    function handleDeviceOrientation(event) {
      alpha.textContent = event.alpha;
      beta.textContent = event.beta;
      gamma.textContent = event.gamma;
    }
    if (DeviceOrientationEvent.requestPermission) {
      DeviceOrientationEvent.requestPermission().then((state) => {
        if (state === 'granted') {
          window.addEventListener(
            'deviceorientation',
            handleDeviceOrientation,
            true,
          );
        }
      });
    } else {
      window.addEventListener(
        'deviceorientation',
        handleDeviceOrientation,
        true,
      );
    }
  }
}

function listenMotion() {
  if (DeviceMotionEvent) {
    function handleDeviceMotion(event) {
      const { x, y, z } = event.acceleration;
      ax.textContent = `${x} m/s2`;
      ay.textContent = `${y} m/s2`;
      az.textContent = `${z} m/s2`;
    }
    if (DeviceMotionEvent.requestPermission) {
      DeviceMotionEvent.requestPermission().then((state) => {
        if (state === 'granted') {
          window.addEventListener('devicemotion', handleDeviceMotion, true);
        }
      });
    } else {
      window.addEventListener('devicemotion', handleDeviceMotion, true);
    }
  }
}
