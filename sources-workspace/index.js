console.log('打開 Sources > Page 編輯 index.js');

let times = 0;

function greet() {
  console.log(`Hello ${times++}`);
  // 修改上面這行後存檔 (Ctrl+S or Command+S)，例如：
  // console.log(`Hi ${times++}!!!!`);
}

setInterval(greet, 2000);

/*
                ／￣￣＼
        　　　 ／ 　〇・ ＞
        　　 ／　 　ε　  │
        　 ／　　 　〇・ ＞
        　(つ＿と＼＿＿／
        　 ∪　∪

*/
