const menu = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");


if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}


/* Get saved user name */

const savedName =
    localStorage.getItem("skillbridgeName");


const user =
    document.getElementById("userName");


if (user && savedName) {

    user.textContent = savedName;

}


/* Demo buttons */

document
    .querySelectorAll("[data-demo]")
    .forEach(button => {

        button.addEventListener("click", () => {

            alert(
                "This feature is ready for your next development stage."
            );

        });

    });