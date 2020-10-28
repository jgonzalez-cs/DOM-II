const h1 = document.querySelector("h1");

window.onload = function() {
    h1.textContent = "The Super Duper Fun Bus"
}

document.onclick = function() {
    document.body.style.backgroundColor = "green";
}

document.onkeypress = function () {
    document.body.style.fontFamily = "Lucida Console"
}

const links = document.querySelector("nav")

links.addEventListener("mouseover", function(event) {
    event.target.style.color = "red";
})

links.addEventListener("mouseout", function(event) {
    event.target.style.color = "blue";
})

document.addEventListener("keydown", function(event) {
    if(event.key === "q") {
        document.body.style.backgroundColor = "red"
    }
})

const linkClick = document.querySelectorAll('button');


linkClick.addEventListener('click',(event)=>{
    linkClick.innerHTML = `Click count : ${event.detail}`;
})