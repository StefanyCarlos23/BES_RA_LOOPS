//Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

let num = Number(prompt("Enter a number from 1 to 10: "))

if (num >=1 && num <=10) {
    console.log(`---------- A tabuada de ${num} é: ----------`);
    for (let i = 1; i <=10;i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
} else {
    console.log("Please enter a number between 1 and 10.");
}
console.log("-".repeat(40));
