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
    const beer = document.querySelectorAll(".drinks");
    const cocktails = document.querySelectorAll(".cocktails");
    const fish = document.querySelectorAll(".fish");
    const rolls = document.querySelectorAll(".rolls");

    let currentMenuItem = starters;
    let currentMenuLink = starterLink;

    starterLink.addEventListener("click", function(e) {
        showSection(e, starters);
    });

    hibachiLink.addEventListener("click", function(e) {
        console.log("Hibachi inside event: " + hibachi);
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
        showSection(e, beer);
    });

    function showSection(e, menuItem) {

        console.log("Current: " + currentMenuItem);
        console.log("Menu Item: " + menuItem);

        // Stop click from bringing you to the top of the page
        e.preventDefault();
        

        // If the menu item isn't the current menu Item toggle off the current menu items
        if(menuItem !== currentMenuItem) {
            for(let i = 0; i < currentMenuItem.length; i++) {
                currentMenuItem[i].classList.toggle("no-show");
            }

            // Shows the menu items for the selected menu items
            for(let j = 0; j < menuItem.length; j++) {
                menuItem[j].classList.toggle("no-show");
            }

            // Set's the menuItem to be the new currentMenuItem

            currentMenuLink.classList.toggle("clicked");
            e.target.classList.toggle("clicked");
            currentMenuLink = e.target;
            currentMenuItem = menuItem;
        }
}
}

setUpMenuList();