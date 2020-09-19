const noise = document.querySelector('#noise');
(async () => {
  while (true) {
    if (noise.checked) {
      const n = Math.floor(Math.random() * 4);
      switch (n) {
        case 0:
          console.debug('A verbose message.');
        case 1:
          console.log('An info message.');
          break;
        case 2:
          console.warn('A warning message.');
          break;
        case 3:
          console.error('An error message.');
          break;
      }
    }
    await sleep(500);
  }
})();
