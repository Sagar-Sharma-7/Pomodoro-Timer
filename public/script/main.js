const boxes = document.querySelectorAll('.box');
const t25 = document.querySelector('.t25');
const t30 = document.querySelector('.t30');
const t35 = document.querySelector('.t35');
const t40 = document.querySelector('.t40');
const min = document.querySelector('.min');
const sec = document.querySelector(".sec");
const start = document.querySelector("#start");
const cancel = document.querySelector("#cancel");
const orbit1 = document.querySelector(".orbit1");
const orbit2 = document.querySelector(".orbit2");
const orbit3 = document.querySelector(".orbit3");
const orbit4 = document.querySelector(".orbit4");
const filler = document.querySelector("#filler");
const time_spent = document.querySelector("#time_spent");
const breakdiv = document.querySelector("#break");
const min_break = document.querySelector(".min_break");
const sec_break = document.querySelector(".sec_break");
const skip_btn = document.querySelector("#skip_btn");

$("#break").slideUp();


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
        sec.innerHTML = "00";
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
    cancel.style.display = "block";
    const milli = new Date().getTime() + timer_min * 60 * 1000;
    const date = new Date(milli);
    const s = date.getSeconds();
    let i = timer_min -1;
    let z = 0;
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
            let timeup = new Audio("./public/audio/timeup.mp3");
            timeup.play();
            breakdiv.style.display= "flex";
            $("#break").slideDown();
            const b_date_milli = new Date().getTime() + 5 * 60 * 1000;
            const b_date = new Date(b_date_milli);
            const b_s = b_date.getSeconds();
            let x = 4;
            let w = 0;
            let z = 0;
            const breakTimer = setInterval(() => {
                const b_now = new Date();
                const b_sec_n = b_now.getSeconds();
                const b_sLeft = b_s - b_sec_n; 
                min_break.innerHTML = "0" + x;
                if(b_sLeft == 0){
                    x -= 1;
                }

                if(b_sLeft >=0){
                    if(b_sLeft < 10){
                        sec_break.innerHTML = "0" + b_sLeft;
                    }else{
                        sec_break.innerHTML = b_sLeft;
                    }
                }else{
                    let y = 60 + b_sLeft;
                    if(y < 10){
                        sec_break.innerHTML = "0"+y;
                    }else{
                        sec_break.innerHTML =y;
                    }
                };

                z += 100/(5 *60);
                if(Math.floor(z) == 100){
                    clearInterval(breakTimer);
                    let timeup = new Audio("./public/audio/timeup.mp3");
                    timeup.play();
                    $("#break").slideUp();
                    $("#timer_slot").slideDown();
                    cancel.style.display = "none";
                    start.style.display = "block";
                }
                skip_btn.addEventListener("click", () => {
                    clearInterval(breakTimer);
                    $("#break").slideUp();
                    $("#timer_slot").slideDown();
                    cancel.style.display = "none";
                    start.style.display = "block";
                });

            }, 1000);



        }

        cancel.addEventListener("click", () => {
            clearInterval(timer);
            $("#timer_slot").slideDown();
            start.style.display = "block";
            cancel.style.display = "none";
            filler.style.display = "none";
        });
    }, 1000);

});

