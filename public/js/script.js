var counter = 0;

function addToCart() {

    if(counter !== 1){
    document.getElementById('result-cart').classList.add('open');
    } 

    function add() {
       counter += 1;  

       document.getElementById('addCount').innerHTML=counter;
  
       document.getElementById('result-cart-count').classList.remove('open2');
       document.getElementById('result-cart-count').classList.add('open1');

       setTimeout(function(){
       	document.getElementById('result-cart-count').classList.remove('open1');
       	document.getElementById('result-cart-count').classList.add('open2');

       },1000);

     }
    add();   
};