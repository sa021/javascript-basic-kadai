//ボタンidHTML要素を取得し、定数に代入 
const btn =document.getElementById('btn');

// テキストidHTML要素を取得し、定数に代入
const text =document.getElementById('text')



  btn.addEventListener ('click' , () => {
    setTimeout(() => {
     text.textContent ="ボタンをクリックしました";
     },2000)
});



