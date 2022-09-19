const navbar = document.querySelector(".navbar");
const up = document.querySelector("#up");
const toggle = document.querySelector(".toggle");
const navbarmenu = document.querySelector(".navbar-menu");
const icon = document.querySelector(".toggle i");
window.onscroll = () => {
    if(window.scrollY >= 450) {
        navbar.classList.add("fixed", "animate__fadeInDown");
    } else{
        navbar.classList.remove("fixed", "animate__fadeInDown");
    }

    if(window.scrollY >= 800) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
}

up.onclick = () => {
    window.scrollTo(0,0);
    // window.scrollTo({
    //     top:0,
    //     behavior:"smooth",
    // })
}

toggle.onclick = () => {
    navbarmenu.classList.toggle("active");
    icon.classList.toggle("fa-xmark");
}