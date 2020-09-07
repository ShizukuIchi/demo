console.log('1. 打開 Sources 面板編輯這個檔案');
console.log('2. 在 Page 頁籤找到 index.js');
console.log('3. 按下 index.js 打開檔案，修改下方的程式碼');

let times = 0;

function greet() {
  console.log(`Hello ${times++}`);
  // 修改上面這行後存檔 (Ctrl+S or Command+S)，例如：
  // console.log(`Hi ${times++}!!!!`);
}

setInterval(greet, 2000);
