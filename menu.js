function setUpMenuList() {
    
    const starterLink = document.querySelector(".starterLink");

    const starters = document.querySelectorAll(".starter");

    starterLink.addEventListener("click", function(e) {

        showSection(e, starters);

    });

    function showSection(e, array) {
        e.preventDefault();

        for(let i = 0; i < array.length; i++) {
            array[i].classList.toggle("no-show");
        }
    }
    

}

setUpMenuList();