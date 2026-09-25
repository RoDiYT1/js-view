let actuallyCalculated = 0
let evAmount = 0
let price = 0
let totalPrice = 0
let maxPrice = 0


for (let i = 1; i <= 7; i++) {
    let time = +prompt("enter the parking time in hours");
    let type = +prompt("enter the car type 1 - regular; 2 - ev");
    if (time == 0){
    break
    }
    if (time<0 || time>12){
        continue
    }

    if (type !== 1 && type !== 2){
        console.log("invalid type, skipping this instance")
        continue
    }

    if (type == 2){
        evAmount++
    }

    if (type == 1 ){
        if (time > 5){
            let disc = 0.8
            price += (40*time)*disc
        }
        else{
            price += (40*time)
        }

    }
    else if (type == 2 ){
        if (time > 5){
            let disc = 0.8
            price += (30*time)*disc
        }
        else{
            price += (30*time)
        }

    }
    if (price > maxPrice){
        maxPrice = price
    }
    totalPrice += price
    actuallyCalculated++


}
console.log("total price: " + totalPrice)
console.log("max price: " + maxPrice)
console.log("electric vehicle amount: " + evAmount)
console.log("actually calculated amount: " + actuallyCalculated)