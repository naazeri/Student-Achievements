// تعریف توابع برای انجام عملیات حسابی
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "خطا: تقسیم بر صفر ناممکن است";
    }
    return a / b;
  }
  
  // خواندن ورودی‌ها از کاربر
  const num1 = parseFloat(prompt("عدد اول را وارد کنید:"));
  const operator = prompt("عملگر را وارد کنید (+, -, *, /):");
  const num2 = parseFloat(prompt("عدد دوم را وارد کنید:"));
  
  // اعمال عملیات حسابی و نمایش نتیجه
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "عملگر نامعتبر";
  }
  
  alert(`نتیجه: ${result}`);