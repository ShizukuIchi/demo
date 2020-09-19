const noise = document.querySelector('#noise');
(async () => {
  let id = 0;
  while (true) {
    if (noise.checked) {
      const n = Math.floor(Math.random() * 4);
      switch (n) {
        case 0:
          console.debug(`A verbose message. (${id++})`);
        case 1:
          console.log(`An info message. (${id++})`);
          break;
        case 2:
          console.warn(`A warning message. (${id++})`);
          break;
        case 3:
          console.error(`An error message. (${id++})`);
          break;
      }
    }
    await sleep(500);
  }
})();
