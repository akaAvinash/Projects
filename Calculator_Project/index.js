let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (e.target.innerHTML == '=') {
            try {
                string = eval(string).toString();  // Convert result to string
                input.value = string;
            } catch (err) {
                input.value = "Error";
                string = "";
            }
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
