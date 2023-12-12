var Count = 0;
function main() {
  while (Count <= 10) {
    var num1 = document.getElementById("user1").value;
    var num2 = document.getElementById("user2").value;
    var result = document.getElementById("guess");
    var i = document.getElementById("count");
    var res = document.getElementById("res");
    if (num2 < 1 || num2 > 100) {
      alert("حدس باید بین ۱ تا ۱۰۰ باشد!");
      continue;
    }

    Count++;

    if (num2 == num1) {
     
      result = res.innerHTML = "تبریک شما برنده شده اید ";
      break;
    } else if (Count == 10) {
      location.reload();
      alert("باختی و نفر اول برنده شد ");
      break;
    } else if (num2 > num1 && num2 - num1 < 10) {
      result = res.innerHTML = "نزدیک شدی و کمتر حدس بزن ";
    } else if (num2 > num1) {
      result = res.innerHTML = " کمتر حدس بزن";
    } else if (num1 - num2 < 10) {
      result = res.innerHTML = "نزدیک شدی و بیشتر حدس بزن ";
    } else {
      result = res.innerHTML = "بیشتر حدس یزن ";
    }
    result= i.innerHTML= "You have ten chances"+ "<br>" +Count;
    return;
  }
  
}