const boxes = document.querySelectorAll('.box');
const t25 = document.querySelector('.t25');
const t30 = document.querySelector('.t30');
const t35 = document.querySelector('.t35');
const t40 = document.querySelector('.t40');
const min = document.querySelector('.min');
const sec = document.querySelector(".sec");
const start = document.querySelector("#start");
const orbit1 = document.querySelector(".orbit1");
const orbit2 = document.querySelector(".orbit2");
const orbit3 = document.querySelector(".orbit3");
const orbit4 = document.querySelector(".orbit4");
const filler = document.querySelector("#filler");
const time_spent = document.querySelector("#time_spent");

t25.value = 25;
t30.value = 30;
t35.value = 35;
t40.value = 40;

let timer_min;

boxes.forEach(box => {
    const min_v = box.value;
    box.addEventListener("click", () => {
        orbit4.style.animationName = "rotate4";
        filler.style.display = "block";
        $("#timer_slot").slideUp();
        min.innerHTML = min_v;
        timer_min = min_v;

    });
});


start.addEventListener("click", () => {
    orbit2.style.animationName = "rotate2";
    orbit3.style.animationName = "rotate3";
    orbit1.style.animationName = "rotate1";
    const clock = new Audio('./public/audio/clock-winding.mp3');
    clock.play();
    start.style.display = "none";
    const milli = new Date().getTime() + timer_min * 60 * 1000;
    const date = new Date(milli);
    const s = date.getSeconds();
    let i = timer_min -1;
    z = 0;
    const timer = setInterval(() =>{
        const now = new Date();
        let s_n = now.getSeconds();
        let sLeft = s - s_n;
        time_spent.style.width = `${z}%`;
        if(i < 10){
            min.innerHTML = "0" + i;
        }else{
            min.innerHTML = i;
        }   
        if(sLeft == 0){
            i -= 1;
        }
        if(sLeft >=0){
            if(sLeft < 10){
                sec.innerHTML = "0" + sLeft;
            }else{
                sec.innerHTML = sLeft;
            }
        }else{
            let y = 60 + sLeft;
            if(y < 10){
                sec.innerHTML = "0"+y;
            }else{
                sec.innerHTML =y;
            }
        };
        z += 100/(timer_min *60);

        if(Math.floor(z) == 100){
            time_spent.style.width = "100%";
            clearInterval(timer);
            const timeup = new Audio("./public/audio/timeup.mp3");
            timeup.play();
        }
    }, 1000);

});