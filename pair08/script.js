// function showMessage() {
//     alert("Hello world!")
// }
// showMessage()
// function showInfo() {
//     console.log("В гостях у Марійки");
//     console.log("Магаз працює з 8:00 до 23:00");
// }
//
// function showProducts(name, price, amount) {
//     console.log("Марійка продає: ",amount, name, "по "+ price +" грн");
//     console.log("Усього: ", price*amount, "грн");
// }
// showInfo();
// showProducts("Вогурок", 50, 4);

// function calculateTotal(price, count) {
//     return price * count;
// }
// let total = calculateTotal(800, 3);
// console.log(total);

// function discount(total) {
//     if (total > 5000) {
//         return 10;
//     }
//     else{return 0}
// }
// let discount1 = discount(1000);
// let discount2 = discount(6000);
// console.log(discount1);
// console.log(discount2);
// ------------
// function getProductTotal(price, count) {
//     return price * count;
// }
// function getDiscount(total) {
//     if (total >= 10000) {
//         return 15
//     } else if (total >= 5000) {
//         return 10
//     }
//     else{
//         return 0;
//     }
// }
// function getDiscountValue(total, percent) {
//     return total * (percent/100);
// }
// function getFinalPrice(total, discount) {
//     return total - discount;
// }
//
// let productName = prompt("Enter product name");
// let productPrice = +prompt("Enter product price");
// let productAmount = +prompt("Enter product amount");
//
// let productTotal = getProductTotal(productPrice, productAmount);
// let productDiscountPercent = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, productDiscountPercent);
// let finalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(`Товар ${productName} ціна ${productPrice} грн кть ${productAmount} шт сума ${productTotal} шт знижка ${productDiscountPercent}% сума знижки ${productDiscountValue} грн загалом ${finalPrice} грн`);
// --------------------------------------------------------------------------------------
function calculateTickets(price, count) {
    return price * count;
}

function getTicketDiscount(total) {
    if (total >= 1500) {
        return 15;
    }
    else if (total >= 1000) {
        return 10;
    }

    else if (total >= 500) {
        return 5;
    }
    else {
        return 0;
    }
}

function calculateTicketDiscount(total, percent) {
    return total * percent / 100;
}

function calculateTicketFinalPrice(total, discount) {
    return total-discount;
}

let ticketPrice = 200;
let ticketCount = 6;
let total = calculateTickets(ticketPrice, ticketCount);
let discountPercent = getTicketDiscount(total);
let discountValue = calculateTicketDiscount(total, discountPercent);
let finalPrice = calculateTicketFinalPrice(total, discountValue);

console.log("Усього " , total, " грн");
console.log("Знижка ", discountPercent, " %");
console.log("Знижка у гривнях ", discountValue, " грн");
console.log("Отже до сплати ", finalPrice, " грн");