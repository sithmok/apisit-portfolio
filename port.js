let port = document.getElementById("topbar-port");

window.addEventListener("scroll", function(){
    port.classList.toggle("top-scroll", window.scrollY > 0);
});