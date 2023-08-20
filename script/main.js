//function Cuppon Code
const submitBtn = document.getElementById('cupponBtn');
const input = document.getElementById('cuppon-number');

input.addEventListener("keyup", (e) =>{
 const value = event.target.value;
    if (value == 'SELL200') {
        submitBtn.removeAttribute('disabled');
    }
    else {
        submitBtn.setAttribute('disabled', true);
    }  
});


//function enable and disable button
const tPrice = document.getElementById('totalPrice');
const button = document.getElementById('btnPurchase');

tPrice.addEventListener('DOMSubtreeModified', updateButtonStatus);
function updateButtonStatus() {
  const elementValue = parseInt(tPrice.innerText);

  if (elementValue > 0) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'true');
  }
}
