let inTheBreak = [];
let outTheBreak = [];

for (let i = 1; i <=10; i++) {
    let num = Number(prompt("Enter a number"));
    if (num >=10 && num <= 20) {
        inTheBreak.push(num);
    } else{
        outTheBreak.push(num);
    }
}
alert(`In the break: ${inTheBreak} || Out the break:  ${outTheBreak}`);

