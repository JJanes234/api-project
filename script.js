const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const rateButton = document.getElementById('swap'); 
const inputNumOne = document.getElementById('number-one');
const inputNumTwo = document.getElementById('number-two');
const rateEle = document.getElementById('rate');

function calculate(){
    const one = currencyOne.value;
    const two = currencyTwo.value;
   fetch(`https://v6.exchangerate-api.com/v6/ac94ce452770f40d7734758f/latest/${one}`)
   .then(response => response.json())
   .then((data) =>{
       console.log(data);
       const rate = data.conversion_rates[two];
       rateEle.innerText = `1 ${one} = ${rate} ${two}`
       inputNumTwo.value= (inputNumTwo.value * rate).toFixed(2); 
   });
}
currencyOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
inputNumOne.addEventListener('input',calculate);
inputNumTwo.addEventListener('input',calculate);
rateButton.addEventListener('click', ()=>{
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
})
calculate();