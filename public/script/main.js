const boxes = document.querySelectorAll('.box');
const t25 = document.querySelector('.t25');
const t30 = document.querySelector('.t30');
const t35 = document.querySelector('.t35');
const t40 = document.querySelector('.t40');
t25.value = 25;
t30.value = 30;
t35.value = 35;
t40.value = 40;

boxes.forEach(box => {
    box.addEventListener("click", () => {
        alert(box.value)
    })
})