// let prices = [120, 23, 45]
// console.log(prices[1])
//
// prices[1] = 50
// console.log(prices.length)
//
// let sum = 0
// for(let i = 0; i< prices.length; i++){
//     console.log(prices[i])
//     sum += prices[i]
// }
// function getTotalPrice(prices){
//     let sum = 0
//     for(let i = 0; i<prices.length; i++){
//         sum += prices[i]
//     }
//     return sum
// }
// let prices = [120, 23, 45, 60, 55]
// let result = getTotalPrice(prices)
// console.log(result)
// --------------------------------------------
let lim = 50
function getTotalPrice(prices){
    let summore = 0
    for(let i = 0; i<prices.length; i++){
        if (prices[i] > lim){
            summore += prices[i]
        }
    }
    return summore
}
let prices = [120, 23, 45, 60, 55]
let result = getTotalPrice(prices)
console.log(result)
//------------------------------------------------------
function getNumList(){
    let list = []
    let num
    let n = +prompt("enter the number amount")
    for (let i = 1; i <= n; i++) {
        num = +prompt(`enter the ${i} number`)
        list[i-1] = num
    }
    return list
}
let userList = getNumList()

let list2 = []
function getEvenNum(list){
    for (let i = 1; i <= list.length; i++){
        if ((Number(list[i-1]) % 2) == 0){
            list2.push(list[i-1])
        }
    }
    return list2
}

getEvenNum(userList)
console.log(list2)