// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// names.push("Mariia");
//
// names.pop()
// names.unshift("Pavlo");
// names.shift();
//
// let names2 = names.slice(1, 3)
//
// console.log(names);
// console.log(names2);

// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// let deleted = names.splice(2, 1);
// console.log(deleted);
//
// names.splice(1, 0, "Seva");
// names.splice(0, 1, "Tetiana", "Nadiia");
// console.log(names);
//
// function register(name) {
//     if (name.trim() === "") {
//         alert("Please enter a name");
//         return;
//     }
//     let exists = false;
//     for(let i = 0; i < name.length; i++) {
//         if (event[i]) === name){
//             exists = true;
//         }
//     }
//     if (exists) {
//         alert("Already registered" + name);
//         return;
//     }
//     event.push(name)
//     alert("Registered" + name);
// }
// function remove(name) {
//     let index = -1;
//     for(let i = 0; i < event.length; i++) {
//         if (event[i] === name) {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) {
//         alert("No such person");
//     }
//     else {
//         event.splice(index, 1);
//         alert("Deleted" + name);
//     }
// }
// function count(){
//     alert('Total: ' + event.length);
// }
// let event = ["Ann", "Oleksandra", "Olesia", "Ivan"];
//
// register("Slavik");
// register("Ann");
// register("");
// remove("Slavik");
// count()
//
// let names = ["Ann", "Oleksandra", "Olesia", "Ivan"];
// for(let i = 0; i < event.length; i++) {
//     console.log(event[i]);
// }
//
// for (let name of names) {
//     console.log(name);
// }
// names.forEach(function (name) {
//     console.log(name);
// })
//-------------------------------------------------------

let names = ["Марія", "Олександра", "Влад", "Іван", "Павло"];

names.push("Влада");
names.unshift("Всеволод");
names.pop();
names.splice(2, 1, "Єгор");

console.log(names);


for (let i = 0; i < names.length; i++) {
    console.log((i + 1)+ " " + names[i]);
}

for (let name of names) {
    console.log(name);
}

names.forEach(function (name) {
    console.log(name + ": " + name.length);
});
//-------------------------------------------------------

let prices = [120, 250, 180, 300, 150, 400];

let total = 0;

for (let price of prices) {
    total += price;
}
console.log("Total: " + total + " hrn");



let count = 0;

for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= 200) {
        count++;
    }
}
console.log("Tickets: " + count);


let average = total / prices.length;
console.log("Average: " + average + " hrn");