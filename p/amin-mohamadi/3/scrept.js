const display = document.querySelector('#dispaly');
const button =  document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = ()  => {
        if (item.id=='clear') {
            display.innerText = '';
        }else if(item .id == 'backspace') {
            let string = display. innerText.toStr();
            display.innerText = string.substr(0,string.length - 1);
        }else if (display.innerText != '' && item,id == 'equal') {
            display .innerText = eval(displa.innerText);
        }else if (display.compareDocumentPosition == ''&& item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display. innerText = ''),2000);
        }else {
            display.innerText += item.id;
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const  calculator = document.querySelector('.calculator');
const toggleicon = document.querySelector('.toggler- icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}

