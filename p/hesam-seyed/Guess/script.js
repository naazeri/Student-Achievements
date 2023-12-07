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
      result = res.innerHTML = "Congratulations, you won the game";
      break;
    } else if (Count == 10) {
      location.reload();
      alert("The game is over and the first person wins");
      //res.innerHTML = "بازی تمام شد و نفر اول برنده شد";
      break;
    } else if (num2 > num1 && num2 - num1 < 10) {
      //alert("نزدیک شدی، کمتر حدس بزن");
      result = res.innerHTML = "You got close, guess less";
    } else if (num2 > num1) {
      //alert("کمتر حدس بزن");
      result = res.innerHTML = "Guess less";
    } else if (num1 - num2 < 10) {
      //alert("نزدیک شدی، بیشتر حدس بزن");
      result = res.innerHTML = "You got close, guess more";
    } else {
      //alert("بیشتر حدس بزن");
      result = res.innerHTML = "Guess more";
    }
    result= i.innerHTML= "You have ten chances"+ "<br>" +Count;
    return;
  }
  
}