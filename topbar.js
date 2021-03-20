let menu = document.getElementById("list-menu");
let mentoggle = document.getElementById("menu");

mentoggle.addEventListener("click", function(){
    menu.classList.toggle("menu-active");
});

let topbar = document.getElementById("topbar");

window.addEventListener("scroll", function(){
    topbar.classList.toggle("top-scroll", window.scrollY > 0);
});

