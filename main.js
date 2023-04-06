'use strict';

const colorChangeList = document.querySelectorAll('.color-change');
const targetButton = document.querySelector('button');

targetButton.addEventListener('click', () => {
    for (const el of colorChangeList) {
    el.classList.add("red");
}
})

const selectedForm = document.querySelector('form');
selectedForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const userNumInput = document.querySelector('#number-input').value
    const userNum = Number(userNumInput)

    if (isNaN(userNum) || userNum >= 10) {
        document.querySelector('#formFeedback').innerText = "Please enter a smaller number.";
    }
    else {
        document.querySelector("#formFeedback").innerText = "You are good to go!";
    }
})
  
  // function validateNumber(evt) {
  //   evt.preventDefault();
  
  //   const numberInput = document.querySelector('#number-input');
  //   const userNum = Number(numberInput.value); // typecast to num
  
  //   const formFeedback = document.querySelector('#formFeedback');
  //   if (isNaN(userNum) || userNum >= 10) {
  //     formFeedback.innerText = 'Please enter a smaller number';
  //   } else {
  //     formFeedback.innerText = 'You are good to go!';
  //   }
  // }
  // document.querySelector('.number-form').addEventListener('submit', validateNumber);