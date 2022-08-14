const d1 = new Date().getTime() + 25 * 60 * 1000;
const d = new Date(d1);
const s = d.getSeconds();
const m = d.getMinutes();
let i = 24;

setInterval(() => {
    const date = new Date();
    let sec = date.getSeconds();
    let sLeft = s - sec;
    console.log("min =", i);
    if(sLeft == 0){
        i = i -1;
    }
     if(sLeft >=0){
         console.log(sLeft);
    }else{console.log(60 + sLeft)};
}, 1000); 

