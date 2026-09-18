let action = prompt("оберіть дію:\n1-кіно\n2-театр\n3-концерт");
while (action !== "1" && action !== "2" && action !== "3") {
    action = prompt("оберіть дію:\n1-кіно\n2-театр\n3-концерт");
}
let price;
switch (action) {
    case "1":
        price = 150;
        break;
    case "2":
        price = 220;
        break;
    case "3":
        price = 350;
        break;
}
let day = prompt("оберіть тип дня:\n1-будній\n2-вихідний");
while (day !== "1" && day !== "2") {
    day = prompt("оберіть тип дня:\n1-будній\n2-вихідний");
}
if (day === "2") {
    price = price*1.15;
}
let amount = +prompt("введіть кількість квитків від 1 до 6");
while (Number.isNaN(amount) || amount < 1 || amount > 6) {
    amount = +prompt("щось не так введіть ще раз");
}

let processed = 0;
let free = 0;
let discounted = 0;
let fullprice = 0;
let total = 0;

for (let i = 1; i <= amount; i++) {
    let age = +prompt(`введіть вік для квитка no${i}\n1-завершити оформлення`);
    while (Number.isNaN(age) || age < -1 || age >99) {
        age = +prompt("щось не так введіть ще раз");
    }
    let actualprice = price;
    let discount = false;

    if (age >= 0 && age <= 5) {
        actualprice = 0;
        free++;
        discount = true;
    }
    else if (age >= 6 && age <= 12) {
        actualprice = actualprice * 0.5;
        discount = true;
    }
    else if (age >= 13 && age <= 17) {
        actualprice = actualprice *0.8;
        discount = true;
    }
    else if (age >= 18 && age <= 25) {
        let student = prompt("є студентський квиток?\nтак/ні");
        while (student !== "так" && student !== "ні") {
            student = prompt("введіть так або ні");
        }

        if (student === "так") {
            actualprice = actualprice * 0.9;
            discount = true;
        }
    }
    else if (age >= 60) {
        actualprice = actualprice * 0.75;
        discount = true;
    }
    if (discount && age > 5) {
        discounted++;
    }
    else if (!discount) {
        fullprice++;
    }

    total += actualprice;
    processed++;
}
if (total > 1000) {
    total =total* 0.95;
}
console.log("оброблено квитків:", processed);
console.log("безкоштовних:", free);
console.log("зі знижкою:", discounted);
console.log("за повною ціною:", fullprice);
console.log("загальна сума:", total, "гривнів");