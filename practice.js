// alert('welcome')
item1 = document.querySelector('.item1');
js = document.querySelector('.js');
item2 = document.querySelector('.item2');
itemfor = document.querySelector('.itemfor');
com = document.querySelector('.com');
Comp = document.querySelector('.comp');
item4 = document.querySelector('.item4');
jj = document.querySelector('.jj')
d = document.querySelector('.d')
// js1 = document.querySelector('js1');
burger = document.querySelector('.burger');
flexs = document.querySelector('.flexs');
flex = document.querySelector('.flex');
x = document.querySelector('.x');
second = document.querySelector('.second-con-nav')

item1.addEventListener('click', () => {
    js.classList.toggle('none');
    itemfor.classList.toggle('none');
    item2.classList.toggle('none');
    // second.classList.toggle('topsay')
    itemfor.classList.add('none');
    itemfor.classList.toggle('d');
    second.classList.add('topsay');
    
})

// flexs.addEventListener('click',()=>{
//     second.classList.toggle('topsay');
// })
item1.addEventListener('click', () => {
    // item2.classList.add('none');
    // js.classList.toggle('none');
    // itemfor.classList.toggle('none');
    // itemfor.classList.add('d');
    
    
})

// d.addEventListener('click',()=>{
//     js.classList.add('none');
//     second.classList.toggle('topsay');

// })
com.addEventListener('click', () => {
    Comp.classList.toggle('none');
    item4.classList.toggle('none');
    jj.classList.add('none');
    jj.classList.toggle('d');


})

burger.addEventListener('click',() => {
    flexs.classList.toggle('ubaid');
    flex.classList.toggle('ubaid');
})

x.addEventListener('click',()=>{
    flexs.classList.add('ubaid');
    flex.classList.add('ubaid');
    
})