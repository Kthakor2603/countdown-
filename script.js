let num=10;
let timer=setInterval(function(){
    document.getElementById("num").innerHTML=num;
    num--;
    if(num<0){
        clearInterval(timer);
    }
},1000)
