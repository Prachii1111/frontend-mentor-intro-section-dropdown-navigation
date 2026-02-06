
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");

hamburgerMenu.addEventListener("click", () => {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
    overlay.style.display = "none";
    document.body.style.overflow = "";
});

const dropdownItems = document.querySelectorAll(".has-dropdown");

dropdownItems.forEach(item => {
    const button = item.querySelector("button");
    const dropdown = item.querySelector(".dropdown");
    const arrowImg = item.querySelector(".arrow");

    dropdown.classList.add("hidden");

    button.addEventListener("click", () => {
        dropdownItems.forEach(other => {
            if (other !== item) {
                other.querySelector(".dropdown").classList.add("hidden");
                other.querySelector(".arrow").classList.remove("rotate");
            }
        });

        dropdown.classList.toggle("hidden");
        arrowImg.classList.toggle("rotate");
    });
});



