function setUpMenuList() {
    
    const starterLink = document.querySelector(".starterLink");

    const starters = document.querySelectorAll(".starter");

    starterLink.addEventListener("click", function(e) {

        e.preventDefault();

        for(let i = 0; i < starters.length; i++) {
            starters[i].classList.toggle("no-show");
        }

    });
    

}

setUpMenuList();