const boxes = document.querySelectorAll('.box');
const t25 = document.querySelector('.t25');
const t30 = document.querySelector('.t30');
const t35 = document.querySelector('.t35');
const t40 = document.querySelector('.t40');
const min = document.querySelector('.min');
const sec = document.querySelector(".sec");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");

t25.value = 25;
t30.value = 30;
t35.value = 35;
t40.value = 40;

let timer_min;
boxes.forEach(box => {
    const min_v = box.value;
    box.addEventListener("click", () => {
        $("#timer_slot").slideUp();
        min.innerHTML = min_v;
        timer_min = min_v;

    });
});


start.addEventListener("click", () => {
    start.innerHTML = "RESUME";
    start.style.display = "none";
    pause.style.display = "block";
    const time_due = new Date().getTime() + timer_min * 60 * 1000;
    const timer = setInterval(() =>{
        const now = new Date().getTime();
        const timeLeft = time_due - now;
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        min.innerHTML = minutes;
        sec.innerHTML = seconds;
    }, 1000);

});