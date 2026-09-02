// let name = "Ivan";
// const age = 10;
// console.log(age);
// console.log(name);

// const name = "Neivan";
// let num = 0;
// let isTrue = false;
//
// console.log(typeof name);
//+ -
// * / %
// **
// const name = prompt("What is your name?");
// let num1 = prompt("First num?");
// let num2 = prompt("Second num?");
//
// console.log(Number(num1)+Number(num2));
// console.log(num1-0 + (num2-0));
//
// let num3 = 100;
// console.log(typeof String(num3));

let name =Number(prompt('Enter product name'));
let price = Number(prompt('Enter product price'));
let quantity = Number(prompt('Enter product quantity'));
let delivery_price = Number(prompt('Enter product delivery price'));
let discount = Number(prompt('Enter product discount (in %)'));

let totalcost = (price * quantity)*(discount/100) + delivery_price;
console.log(`Total cost: ${totalcost} uah`);
alert("product" + name + "\ntotal price" + totalcost);