const d1 = new Date().getTime() + 25 * 60 * 1000;
const d = new Date(d1);
const s = d.getSeconds();
const m = d.getMinutes();
let i = 24;

setInterval(() => {
    const date = new Date();
    let sec = date.getSeconds();
    let sLeft = s - sec;
    if(sLeft >=0){
        if(sLeft < 10){
            console.log("0"+ sLeft)
        }else{
            console.log(sLeft)
        }
    }else{
        if(60 + sLeft < 10){
            console.log("0"+ 60 + sLeft)
        }else{
            console.log(60 + sLeft)
        }
    };

}, 1000); 

