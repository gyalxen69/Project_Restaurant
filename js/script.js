import { food } from './data.js' 
console.log(food);
var counter = 0;
var foodQuantity = 0;
var cart = []

function initialize(){
    printHtml(counter);
    addingListeners();
}


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
    btnBack.addEventListener('click', forBack);
    const btnLess = document.querySelector('.btn-less');
    btnLess.addEventListener('click', toLess);
    const btnAdd = document.querySelector('.btn-more');
    btnAdd.addEventListener('click', toAdd);
}

function forNext(){
    foodQuantity = 0;
    document.querySelector('.food-quantity').textContent = foodQuantity;
    counter += 1;
    if(counter > food.length - 1)
    {
        counter = 0;
    }
    printHtml(counter);
}

function forBack(){
    foodQuantity = 0;
    document.querySelector('.food-quantity').textContent = foodQuantity;
    counter -= 1;
    if(counter < 0)
    {
        counter = food.length - 1;
    }
    printHtml(counter);
}

function toLess(){
    foodQuantity -= 1;
    if(foodQuantity < 0)
    {
        foodQuantity = 0;
    }
    document.querySelector('.food-quantity').textContent = foodQuantity;
    printHtml(counter);
}

function toAdd(){
    foodQuantity += 1;
    const foodName = document.querySelector('.food-name');

    if(foodQuantity > 10)
    {
        foodQuantity = 10;
    }
    document.querySelector('.food-quantity').textContent = foodQuantity;
    printHtml(counter);
}

initialize();
