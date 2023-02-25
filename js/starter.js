// Logic for starter.html

window.addEventListener("load", () => {
    displayDay(0);
    const dayBtns = document.querySelectorAll(".day-btns");
    dayBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            displayDay(index);
        });
    });
});

const displayDay = day => {
    const dayContainers = document.querySelectorAll(".instructions-container")
    dayContainers.forEach((container, index) => {
        if (index === day) {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    });
};