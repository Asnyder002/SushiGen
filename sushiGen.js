const navSlide = function() {
    
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const navContainer = document.querySelector(".nav");
    const body = document.querySelector(".everything");

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
        navContainer.classList.toggle("navContainer");
        body.classList.toggle("bodyContainer");

    });

}

const smoothScroll = function(target, duration) {

    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    const animation = function(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    const ease = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);

}

const arrow = document.querySelector(".arrow");

if(arrow != null) {
    arrow.addEventListener("click", function(){
        smoothScroll(".logoBanner", 750);
    });
}

navSlide();