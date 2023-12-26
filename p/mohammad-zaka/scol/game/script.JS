const min =1;
const max =100;
const randomnumber=Math.floor(Math.random() * (max - min+1)) + min;
let attempts = 10;
const button=document.getElementById("button")
const guessInput=document.getElementById("guess")
const message=document.getElementById("message")

button.addEventListener(`click`,function () {
    const userguess =parseInt(guessInput.value);

    if (isNaN(userguess) || userguess< min || userguess> max) {
        message.textContent = "لطفا یک عدد بین 1 تا 100 انتخاب کنید"
    }else{
        attempts--;
        if (userguess === randomnumber) {
            message.textContent= `شما برنده شدید : ${randomnumber}`
            disabelinput()
        }else if(userguess < randomnumber) {
            message.textContent= `عدد وارد شده کمتر از عدد تعیین شده است :${attempts}`
        }
    else{
        message.textContent = `عدد وارد شده بیشتر از عدد تعیین شده است :${attempts}`
    }

if (attempts===0) {
    message.textContent =`شما باختید عدد درست : ${randomnumber}`
    disabelinput()
    }
}
});

function disabelinput(){
    guessInput.disabled=true
    button.disabled=true

}
 console.log(randomnumber);



