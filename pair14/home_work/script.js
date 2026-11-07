let nameinput = document.querySelector("#nameinput");
let namebtn = document.querySelector("#namebtn");
let namep = document.querySelector("#namep");

namebtn.addEventListener('click', function(){
    namep.textContent = "Привіт, " + nameinput.value.trim();
})

let all = document.body;
let themeselec = document.querySelector("#themes");
themeselec.addEventListener('click', function(){
if (themeselec.value == "dark"){
    all.classList.add("dark");
    all.classList.remove("light");
    all.classList.remove("vibrant");
}else if(themeselec.value == "light"){
    all.classList.add("light");
    all.classList.remove("dark");
    all.classList.remove("vibrant");
} else if (themeselec.value == "vibrant"){
    all.classList.add("vibrant");
    all.classList.remove("light");
    all.classList.remove("dark");
}})


let hidden  = document.querySelector("#hidden");
let hiddenbtn = document.querySelector("#moreinfobtn");
hidden.classList.toggle('hidden');

hiddenbtn.addEventListener('click', function(){
    hidden.classList.toggle('hidden');
});

