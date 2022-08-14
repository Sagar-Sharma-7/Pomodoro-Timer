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
    const milli = new Date().getTime() + timer_min * 60 * 1000;
    const date = new Date(milli);
    const s = date.getSeconds();
    let i = timer_min -1;
    const timer = setInterval(() =>{
        const now = new Date();
        let s_n = now.getSeconds();
        let sLeft = s - s_n;

        if(sLeft >=0){
            if(sLeft < 10){
                sec.innerHTML = "0" + sLeft;
            }else{
                sec.innerHTML = sLeft;
            }
        }else{
            if(60 + sLeft < 10){
                sec.innerHTML = "0" + 60 + sLeft;
            }else{
                sec.innerHTML = 60 + sLeft;
            }
        };

    }, 1000);

});