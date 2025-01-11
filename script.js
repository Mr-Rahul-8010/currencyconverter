const input = document.getElementById("inp");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const button = document.querySelector(".btn");
const msg = document.querySelector(".msg p");

const conversion = {
    USD: { IND: 86, EUR: 0.85, AUD: 1.3, JPY: 110, AED: 3.67 },
    IND: { USD: 0.012, EUR: 0.0098, AUD: 0.015, JPY: 1.43, AED: 0.043 },
    EUR: { USD: 1.18, IND: 101.6, AUD: 1.54, JPY: 130, AED: 4.33 },
    AUD: { USD: 0.77, IND: 66.3, EUR: 0.65, JPY: 84.6, AED: 2.84 },
    JPY: { USD: 0.0091, IND: 0.7, EUR: 0.0077, AUD: 0.012, AED: 0.033 },
    AED: { USD: 0.27, IND: 23.47, EUR: 0.23, AUD: 0.35, JPY: 30.49 },
};

button.addEventListener("click",()=>{
    const amount = parseFloat(input.value);
    const from = fromcurr.value;
    const to = tocurr.value;

    if(isNaN(amount) || amount <= 0){
        msg.textContent="Please Enter a valid Amount";
        return;
    }

    if(from === to){
        msg.textContent = `converted amount: ${amount.toFixed(2)} ${to}`;
        return;
    }

    const rate = conversion[from][to];
    const convertedamount = (amount*rate).toFixed(2);
    msg.textContent = `converted amount: ${convertedamount} ${to}`;

    input.value="";
});