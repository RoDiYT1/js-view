const correctPin = 2026
let pin = 0
let i = 1
while (i <= 3){
    console.log(`attempt no ${i}`);
    pin = +prompt(`Enter your pin`);
    if (pin == correctPin) {
        console.log("Доступ дозволено");
        break;
    }
    else {
        console.log(`incorrect pin, ${3-i} tries left`)
        if (i == 3) {
            console.log("Доступ заблоковано")
        }
    i++
    }

}