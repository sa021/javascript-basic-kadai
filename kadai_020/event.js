// btn id持つHTML要素を取得し、定数に代入
const btn =document.getElementById('btn');

// text id持つHTML要素を取得し、定数に代入
const text = document.getElementById('text')


// HTML要素がクリックされたときにイベント処理を実行
btn.addEventListener('click' , () => {
  text.textContent ="ボタンをクリックしました。";
});