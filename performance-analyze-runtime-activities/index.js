const sleep = (ms) => {
  const start = new Date();
  let now = new Date();
  while (now - start < ms) {
    now = new Date();
  }
};
const sleepMore = () => {
  sleep(500);
};
function run() {
  sleep(1000);
  sleepMore();
}
