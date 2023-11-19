window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden")

  loader(".loader").addEventListener("transitionend", () => {
      document.body.removeChild(loader(".loader"))
  });
});
function number() {
    var inputElement = document.getElementById("inputNumberBarthDay");
    var inputValue = parseInt(inputElement.value);
    

    var result = 1402 - inputValue;
    
    var resultElement = document.getElementById("outputNumberBarthDay");
    resultElement.value = result;

  }
  