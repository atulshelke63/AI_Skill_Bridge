const selected =
    localStorage.getItem("selectedCourse");


if (selected) {

    console.log(
        "Selected course:",
        selected
    );

}


/* Animate progress bars */

document
    .querySelectorAll(".line i")
    .forEach(bar => {

        bar.style.transition =
            "width 1s ease";

    });