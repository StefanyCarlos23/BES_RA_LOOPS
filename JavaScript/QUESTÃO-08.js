let num = Number(prompt("Enter a number"))

if (num <= 0 || isNaN(num)){
    alert("Please enter a valid number!!")
} else {
    let dividers = [];
    for (let divider = 1; divider <= num; divider++) {
        if (num % divider === 0 ){
            dividers.push(divider);
        }  
    }
    alert(`The dividers of ${num} are: ${dividers}`);
}

