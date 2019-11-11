const navSlide = function() {
    
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", function() {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        // Animate Links
        for(var i = 0; i < navLinks.length; i++) {
            if(navLinks[i].style.animation) {
                navLinks[i].style.animation = "";
            }
            else {
                let time = (i / 7) + .5;
                navLinks[i].style.animation = "navLinkFade 0.5s ease forwards " + time + "s";
            }
        }


        //burger Animation
        burger.classList.toggle("toggle");


    });

    
}

navSlide();