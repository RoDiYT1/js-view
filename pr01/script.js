// > < >= <= == === !== !=
//
// let a, b;
// a = "1";
// b=1;
// console.log(a>b);

// let temp = Number(prompt("Enter a temperature"));
// let result;
// if (temp<0) {
//     result = "freezing cold"
// }
// else if (temp>0 & temp<25) {
//     result = "tolerable"
// }
// else if (temp>25) {
//     result = "scorching hot"
// }
// alert(result);


//-----------------------------------------------------
// let num = Number(prompt("num"));
// if ((num % 2) == 1) {
//     console.log("odd");
// }
// else {
//     console.log(even);
// }
//-----------------------------------------------------
//
// const login = "admin"
// const password = "12345"
//
// let user_login = prompt(" username?")
// let user_password = prompt(" password?")
//
// if (user_login === login && user_password === password) {
//     alert("access granted")
// }
// else {
//     alert("invalid login")
// }


// let deliveryType = prompt("What is your delivery type?");
// switch(deliveryType) {
//     case "post":
//         cost = 100;
//         break;
//     case "courier":
//         cost = 200;
//         break;
//     case "pickup":
//         cost = 0;
//         break;
//     default:
//         cost = "n/a";
// }
// alert(cost);

let day;
let num = Number(prompt("enter the day number"));
switch(num) {
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
        break;
    case 7:
        day = "sunday";
        break;
}
alert(day);