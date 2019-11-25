class menuItem {

    constructor(link, eleArray, bool) {
        this.link = link;
        this.eleArray = eleArray;
        this.bool = bool;
    }
}

function setUpMenuList() {

    let starterTest = new menuItem(document.querySelector(".starterLink"), document.querySelectorAll(".starter"), true);
    let hibachiTest = new menuItem(document.querySelector(".hibachiLink"), document.querySelectorAll(".hibachi"), false);
    let fishTest = new menuItem(document.querySelector(".fishLink"), document.querySelectorAll(".fish"), false);
    let rollTest = new menuItem(document.querySelector(".rollLink"), document.querySelectorAll(".rolls"), false);
    let desertTest = new menuItem(document.querySelector(".rollLink"), document.querySelectorAll(".desert"), false);
    let cocktailTest = new menuItem(document.querySelector(".cocktailLink"), document.querySelectorAll(".cocktails"), false);
    let beerTest = new menuItem(document.querySelector(".beerLink"), document.querySelectorAll(".drinks"), false);
    
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

    let starterBool = true;
    let hibachiBool = false;
    let fishBool = false;
    let rollBool = false;
    let desertBool = false;
    let cocktailBool = false;
    let beerBool = false;

    starterLink.addEventListener("click", function(e) {

        e.preventDefault();

        if (starterBool == false) {
            showSection(e, starters);
            starterBool = true;
        }

    });

    hibachiLink.addEventListener("click", function(e) {

        e.preventDefault();

        if (hibachiBool == false) {
            showSection(e, hibachi);
            hibachiBool = true;
        }

    });

    fishLink.addEventListener("click", function(e) {

        e.preventDefault();

        if (fishBool == false) {
            showSection(e, fish);
            fishBool = true;
        }

    });

    rollLink.addEventListener("click", function(e) {

        e.preventDefault();

        if (rollBool == false) {
            showSection(e, rolls);
            rollBool = true;
        }

    });

    desertLink.addEventListener("click", function(e) {

        e.preventDefault();
        
        if (desertBool == false) {
            showSection(e, desert);
            desertBool = true;
        }

    });

    cocktailLink.addEventListener("click", function(e) {

        e.preventDefault();

        if (cocktailBool == false) {
            showSection(e, cocktails);
            cocktailBool = true;
        }

    });

    beerLink.addEventListener("click", function(e) {

        e.preventDefault();

        if (beerBool == false) {
            showSection(e, drinks);
            beerBool = true;
        }

    });

    function showSection(e, array) {
        setAllFalse();

        for(let i = 0; i < array.length; i++) {
            array[i].classList.toggle("no-show");
        }
    }

    function setAllFalse() {
        starterBool = false;
        hibachiBool = false;
        fishBool = false;
        rollBool = false;
        desertBool = false;
        cocktailBool = false;
        beerBool = false;
    }
    

}

setUpMenuList();