const bluelist = document.getElementsByTagName('li');
const transform =document.getElementById('Transformation');
const choice= document.getElementById('choice');
const EnB= document.querySelectorAll('EnB');
const evens= document.querySelectorAll('li:nth-child(even)');

transform.addEventListener('click', () =>{
for (let b =0; b < bluelist.length; b++){
    bluelist[b].style.background=choice.value;
}
});
transform.addEventListener('click', () =>{
    for (let b =0; b < EnB.length; b++){
        EnB[b].style.background='rgb(249,149,136)';
    }
});
transform.addEventListener('click', () =>{
    for (let b =0; b < evens.length; b++){
        evens[b].style.color='lightgray';
    }
});