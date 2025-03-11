let inputNumber = [];

for (let i = 1; i <=10; i++) {
    let input = Number(prompt("Enter a number"));
    inputNumber.push(input);
}

inputNumber.sort((a, b) => a - b); 
alert(inputNumber);