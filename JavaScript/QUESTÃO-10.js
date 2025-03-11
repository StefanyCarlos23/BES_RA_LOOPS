let  list = [2, 4, 7, 2, 3, 3, 1, 0, 2, 6];

let numRepeat = null;
let contRepeat = 0;

list.forEach( num => {
    let cont = list.filter(item => item === num).length;4
    if (cont > contRepeat) {
        contRepeat = cont;
        numRepeat
    }
});

console.log(`O número que mais se repete ${numRepeat}`);

console.log("Hello")