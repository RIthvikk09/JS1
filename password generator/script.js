const passwordOutput = $('#password-output');
const lengthInput = $('#length-input');
const uppercaseInput = $('#uppercase-input');
const lowercaseInput = $('#lowercase-input');
const numbersInput = $('#numbers-input');
const symbolsInput = $('#symbols-input');
const generateButton = $('#generate-btn');

const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const generatePassword = () => {
    const lenght = parseInt($('#lenght-input').value);
    if (isNaN(lenght) || lenght < 8 || lenght > 32) {
        alert('Please enter a password lenght between 8 and 32.');
        return;
    }
}

const getRandomSymbol = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
};

let password = '';
const characterFuncs = [];
if ($('#uppercase-input').checked) {
    characterFuncs.push(getRandomUpper);
}
if ($('#lowercase-input').checked) {
    characterFuncs.push(getRandomLower);
}
if ($('#numbers-input').checked) {
    characterFuncs.push(getRandomNumber);
}
if ($('#symbols-input').checked) {
    characterFuncs.push(getRandomSymbol);
}
if (characterFuncs.length === 0) {
    alert('Please select at least one type of character.');
    return;
}
for (let i = 0 )