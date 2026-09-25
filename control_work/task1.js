let age = +prompt("your age")
let dayType = +prompt("enter the day type 1 - mon-fri; 2 - weekend")
while (dayType !== 1 && dayType !== 2) {
    console.log("Помилка: неправильний тип дня")
    dayType = prompt("enter the day type 1 - mon-fri; 2 - weekend");
}
let price
let disc
if (age <= 7) {
    disc = 0
}
else if (age > 7 && age <= 17) {
    disc = 0.5
}
else if (age > 17 && age <= 59) {
    disc = 1
}
else if (age >= 60) {
    disc = 0.6
}

if (dayType == 1) {
    price = 200*disc
}
else if (dayType == 2) {
    price = 250*disc
}
console.log("total price: " + price + "uah")