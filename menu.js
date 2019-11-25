function setUpMenuList() {
    
    const starterLink = document.querySelector(".starterLink");
    const hibachiLink = document.querySelector(".hibachiLink");
    const fishLink = document.querySelector(".fishLink");
    const rollLink = document.querySelector(".rollLink");
    const desertLink = document.querySelector(".desertLink");
    const cocktailLink = document.querySelector(".cocktailLink");
    const beerLink = document.querySelector(".beerLink");

    const starters = document.querySelectorAll(".starter");
    const hibachi = document.querySelectorAll(".hibachi");
    const desert = document.querySelectorAll(".desert");
    const drinks = document.querySelectorAll(".drinks");
    const cocktails = document.querySelectorAll(".cocktails");
    const fish = document.querySelectorAll(".fish");
    const rolls = document.querySelectorAll(".rolls");

    starterLink.addEventListener("click", function(e) {

        showSection(e, starters);

    });

    hibachiLink.addEventListener("click", function(e) {

        showSection(e, hibachi);

    });

    fishLink.addEventListener("click", function(e) {

        showSection(e, fish);

    });

    rollLink.addEventListener("click", function(e) {

        showSection(e, rolls);

    });

    desertLink.addEventListener("click", function(e) {

        showSection(e, desert);

    });

    cocktailLink.addEventListener("click", function(e) {

        showSection(e, cocktails);

    });

    beerLink.addEventListener("click", function(e) {

        showSection(e, drinks);

    });

    function showSection(e, array) {
        e.preventDefault();

        for(let i = 0; i < array.length; i++) {
            array[i].classList.toggle("no-show");
        }
    }
    

}

setUpMenuList();