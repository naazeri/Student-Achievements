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
      //alert("تبریک شما برنده بازی شدید ");
      result = res.innerHTML = "تبریک شما برنده بازی شدید ";
      break;
    } else if (Count == 10) {
      location.reload();
      alert("بازی تمام شد و نفر اول برنده شد");
      //res.innerHTML = "بازی تمام شد و نفر اول برنده شد";
      break;
    } else if (num2 > num1 && num2 - num1 < 10) {
      //alert("نزدیک شدی، کمتر حدس بزن");
      result = res.innerHTML = "نزدیک شدی، کمتر حدس بزن";
    } else if (num2 > num1) {
      //alert("کمتر حدس بزن");
      result = res.innerHTML = "کمتر حدس بزن";
    } else if (num1 - num2 < 10) {
      //alert("نزدیک شدی، بیشتر حدس بزن");
      result = res.innerHTML = "نزدیک شدی، بیشتر حدس بزن";
    } else {
      //alert("بیشتر حدس بزن");
      result = res.innerHTML = "بیشتر حدس بزن";
    }
    result= i.innerHTML= "تو ده تا شانس داری "+ "<br>" +Count;
    return;
  }
  
}