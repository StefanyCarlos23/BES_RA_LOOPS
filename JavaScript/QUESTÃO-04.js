
let ageSum = 0
let cont = 0

while (true) {
    let age = prompt("Enter an age and press '000' to exit and get the average")
    if (age === "000"){
        let average = ageSum/cont
        alert(average)
        break
    }
    else {
        age = Number(age)
        if(!isNaN(age)){
            ageSum += age
            cont++
        } else{
            alert("Please enter a valid number for age.")
        }   
    }
}
