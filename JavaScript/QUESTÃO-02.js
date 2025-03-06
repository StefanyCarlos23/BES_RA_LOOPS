//Count from 1 to 101 and say which numbers are even and which are odd

let even = []
let odd = []

for (let i = 1; i <= 101; i++) {
    if (i % 2 !==0) {
        odd.push(i)
    } else {
        even.push(i)
    }
}

console.log(`The even list: \n${even}\n`)
console.log(`The odd list: \n${odd}`)

