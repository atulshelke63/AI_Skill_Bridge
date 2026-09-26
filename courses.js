const search =
    document.getElementById("courseSearch");


const cards =
    [
        ...document.querySelectorAll(".searchable")
    ];


const filters =
    [
        ...document.querySelectorAll(".filter")
    ];


function updateCourses() {

    const term =
        (search.value || "").toLowerCase();


    const active =
        document
            .querySelector(".filter.active")
            .dataset
            .filter;


    cards.forEach(card => {

        const textMatch =
            card.dataset.name.includes(term);


        const levelMatch =
            active === "all" ||
            card.dataset.level === active;


        card.style.display =
            textMatch && levelMatch
                ? "block"
                : "none";

    });

}


search.addEventListener(
    "input",
    updateCourses
);


filters.forEach(filter => {

    filter.addEventListener(
        "click",
        () => {

            filters.forEach(item => {

                item.classList.remove("active");

            });


            filter.classList.add("active");

            updateCourses();

        }
    );

});


document
    .querySelectorAll(".course-action")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                localStorage.setItem(
                    "selectedCourse",
                    button.dataset.course
                );


                alert(
                    `${button.dataset.course} added to your learning plan!`
                );

            }
        );

    });