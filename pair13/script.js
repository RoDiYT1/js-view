// let heading = document.querySelector('h1');
// console.log(heading);
// let nameElement = document.getElementById('profile-name');
// let profileElement = document.getElementsByClassName('profile-role');
// let skills = document.querySelectorAll('.skill');
//
// for (let skill of skills) {
//     console.log(skill);
// }
// nameElement.textContent = nameElement.innerText;

let student = {
    name: "Nadiyka",
    role: "litseyistka 11 IT",
    city: "kyiv",
    portfolio: 'https://egsample.com',
}
let nameElement = document.querySelector('#profile-name')
let roleElement = document.querySelector('.profile-role')
let cityElement = document.querySelector('#profile-city')
let portfolioElement = document.querySelector('#profile-link')

nameElement.textContent = student.name
roleElement.textContent = student.role
cityElement.textContent = student.city
portfolioElement.setAttribute('href', student.portfolio)
portfolioElement.setAttribute('title', "open portfolio")

let skills = document.querySelectorAll('.skill')
skills[0].textContent = "HTML"
skills[1].textContent = "CSS"
skills[2].textContent = "JS"