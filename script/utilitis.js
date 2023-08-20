let total = (0).toFixed(2);
let itemCount = 1;
// add element in cart
function addToCart(titelId, priceId) {
    const itemName = document.getElementById(titelId);
    const itemNameValue = itemName.innerText;
    
    const selectedBox = document.getElementById("selected-products");
    const createLi = document.createElement("li");
    
    createLi.innerText = `${itemCount}. ${itemNameValue}`;
    selectedBox.appendChild(createLi);

    const itemPrice = document.getElementById(priceId);
    const itemPriceValue = itemPrice.innerText;
    const itemPriceString = parseFloat(itemPriceValue);
    const itemPriceTwoFix = itemPriceString.toFixed(2);

    const totalString = parseFloat(total) + parseFloat(itemPriceTwoFix);
    total = totalString.toFixed(2);
    setInnerText("totalPrice", total);
    itemCount++;
}

//function to set inner text
function setInnerText(id, value) {
   const getTheId = document.getElementById(id);
  return getTheId.innerText = value;
}

//function to apply coupon
function applyCoupon() {
    const cupponNumber = document.getElementById("cuppon-number").value;
    const totalAmount = document.getElementById("totalPrice").innerText;
    const totalAmountString = parseFloat(totalAmount);
    const totalAmountTwoFix = totalAmountString.toFixed(2);
    if (totalAmountTwoFix > 200 && cupponNumber == "SELL200") {
        const discountedAmount = totalAmountTwoFix * 0.2;
        const discountTwofix = discountedAmount.toFixed(2);
        const grandTotal = (totalAmountTwoFix - discountTwofix).toFixed(2);
        setInnerText("discountPrice", discountTwofix);
        setInnerText("grandTotal", grandTotal);
    }
    else{
        alert("Sorry You are not eligible for this coupon");
    }
}

//function to fill input field with coupon code (OPTIONAL)
function fillInputField() {
    const inputField = document.getElementById("cuppon-number");
    inputField.value = "SELL200";
}

//function of go back home button
function backToHome() {
    window.location.href = "index.html";
}


// if (cupponNumber == "SELL200") {
//     const discountedAmount = total * 0.2;
//     const discountTwofix = discountedAmount.toFixed(2);
//     const grandTotal = (total - discountTwofix).toFixed(2);
//     setInnerText("discountPrice", discountTwofix);
//     setInnerText("grandTotal", grandTotal);
//   } 
//   else {
//     alert("invalid coupon try again");
//   }