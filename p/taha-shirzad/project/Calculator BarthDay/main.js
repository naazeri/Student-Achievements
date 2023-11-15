function number() {
    var inputElement = document.getElementById("inputNumberBarthDay");
    var inputValue = parseInt(inputElement.value);
    

    var result = 1402 - inputValue;
    
    var resultElement = document.getElementById("outputNumberBarthDay");
    resultElement.value = result;

  }
  