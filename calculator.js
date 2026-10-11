const numberOne = document.querySelector("#numberOne");

const numberTwo = document.querySelector("#numberTwo");

const addButton = document.querySelector("#add");

const subtractButton = document.querySelector("#subtract");

const multiplyButton = document.querySelector("#multiply");

const divideButton = document.querySelector("#divide");

const result = document.querySelector("#result");


addButton.addEventListener("click", addNumbers);

subtractButton.addEventListener("click", subtractNumbers);

multiplyButton.addEventListener("click", multiplyNumbers);

divideButton.addEventListener("click", divideNumbers);


function addNumbers() {

    const firstNumber = Number(numberOne.value);

    const secondNumber = Number(numberTwo.value);

    const answer = firstNumber + secondNumber;

    result.innerText = answer;

}

function subtractNumbers() {

    const firstNumber = Number(numberOne.value);

    const secondNumber = Number(numberTwo.value);

    const answer = firstNumber - secondNumber;

    result.innerText = answer;

}

function multiplyNumbers() {

    const firstNumber = Number(numberOne.value);

    const secondNumber = Number(numberTwo.value);

    const answer = firstNumber * secondNumber;

    result.innerText = answer;

}

function divideNumbers() {

    const firstNumber = Number(numberOne.value);

    const secondNumber = Number(numberTwo.value);

    const answer = firstNumber / secondNumber;

    result.innerText = answer;

}