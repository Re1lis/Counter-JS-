const inputSelector = document.querySelector('.input');

const plusButton = document.querySelector('.plus_button').addEventListener('click', () => {
    inputSelector.value++;
})

const minusButton = document.querySelector('.minus_button').addEventListener('click', () => {
    inputSelector.value--;
})

const buttonClearInput = document.querySelector('.clear_button').addEventListener('click', () => {
    inputSelector.value = 0;
})