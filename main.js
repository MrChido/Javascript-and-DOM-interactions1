const   myHeading = document.getElementById('myHeading');
const   Transformation = document.getElementById('Transformation');
const   feature1 = document.getElementById('feature1');
const   choice = document.getElementById('choice');

myHeading.addEventListener('click', () =>{
    myHeading.style.background= 'rgb(199,44,72)';
    myHeading.style.color='#fbaed2';
});

Transformation.addEventListener('click', () =>{
    feature1.style.color='rgb(0,105,148)';
   feature1.style.fontSize= 34;
});



