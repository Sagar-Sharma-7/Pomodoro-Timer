const d = new Date();
const s = d.getSeconds();

setInterval(() => {
    const date = new Date();
    let sec = date.getSeconds();
    let sLeft = s - sec;
     if(sLeft >=0){
         console.log(sLeft);
    }else{console.log(60 + sLeft)}
}, 1000); 

