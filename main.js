'use strict';

const colorChangeList = document.querySelectorAll('.color-change');
const targetButton = document.querySelector('button');

targetButton.addEventListener('click', () => {
    for (const el of colorChangeList) {
    el.classList.add("red");
}
})

const selectedForm = document.querySelector('form');
selectedForm.addEventListener('click', (evt) => {
    evt.preventDefault();

    const userNumInput = document.querySelector('#number-input')

    if (userNumInput >= 10 || typeof(userNumInput) != Number) {
        document.querySelector('#formFeedback').innerText = "Please enter a smaller number."
    }
    else {
        document.querySelector("#formFeedback").innerText = "You are good to go!"
    }
})