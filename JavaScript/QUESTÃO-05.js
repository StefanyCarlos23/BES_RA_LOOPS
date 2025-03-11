// Read 10 numbers and print how many are even and how many are odd.

let even = []
let odd = []

for (let i = 1; i <= 10; i++) {
    let num = Number(prompt("Digite um num"))
    if (num % 2 !==0) {
        odd.push(num)
    } else {
        even.push(num)
    }
}

console.log(`The even list: \n${even}\n`)
console.log(`The odd list: \n${odd}`)
