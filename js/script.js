import { food } from './data.js' 
console.log(food);
let counter = 0;

function initialize(){
    addingListeners();
    printHtml(counter);
}

initialize();

function printHtml(counter){
    const foodName = document.querySelector('.food-name');
    const ingri = document.querySelector('.ingri');
    const descri = document.querySelector('.food-descri');
    const price = document.querySelector('.price');
    foodName.innerText = food[counter].name;
    ingri.innerText = food[counter].ingridients;
    descri.innerText = food[counter].description;
    price.innerText = food[counter].price;
}

function addingListeners(){
    const btnNext = document.querySelector('.btn-next');
    btnNext.addEventListener('click', forNext);
    const btnBack = document.querySelector('.btn-back');
    btnBack.addEventListener('click', forBack)
}

function forNext(){
    counter += 1;
    if(counter > food.length - 1)
    {
        counter = 0;
    }
    printHtml(counter);
}

function forBack(){
    counter -= 1;
    if(counter < 0)
    {
        counter = food.length - 1;
    }
    printHtml(counter);
}

