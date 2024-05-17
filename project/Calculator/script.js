const display = document.querySelector('.display');
const btns = document.querySelectorAll('button');
const specialChars = ['%','/', '*', '-', '+', '='];
let output = "";

const calculate = (btnValue) => {
    display.focus();
   if (btnValue === '=' && output !== "") {
       output = eval(output.replace("%", "/100"));
   } else if (btnValue ==='C') {
       output = "";
   } else  {
       if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
   }

   display.value = output;
};
btns.forEach((btns) => {
    btns.addEventListener('click', (e) => calculate(e.target.dataset.value));
});
