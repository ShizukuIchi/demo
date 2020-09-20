document.querySelector('code').textContent = `function RenderCounter() {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [asyncCount, setAsyncCount] = React.useState(0);
  const [asyncCount2, setAsyncCount2] = React.useState(0);
  const onClick = () => {
    console.countReset('render count'); // 計算前先把 'render' 歸零
    setCount(count + 1); // 1
    setCount2(count2 + 1); // 1
    Promise.resolve().then(() => {
      setAsyncCount(asyncCount + 1); // 2
      setAsyncCount2(asyncCount2 + 1); // 3
    });
  };
  console.count('render count');
  return <button onClick={onClick}>Click Count: {count}</button>;
}`;
