var count = 1
function plus(){
    var i , sum;
    sum=0
    for(i=100;i<=999;i++){
        sum=sum+i;
        console.log(sum)

    }
    var a=document.getElementById("qe");
    count++;
    a.innerHTML=count;

}
setInterval(plus,1000);