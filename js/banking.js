
//deposit and add in the deposit section
document.getElementById('deposit-button').addEventListener('click',()=>{

const depositInput =document.getElementById('deposit-input');
const depositAmount = depositInput.value ;
const amountTotal = document.getElementById('amount-total')
amountTotal.innerText=depositAmount;
depositInput.value='';
})

//withdraw and add in the withdraw section
document.getElementById('deposit-button').addEventListener('click',()=>{

const depositInput =document.getElementById('deposit-input');
const depositAmount = depositInput.value ;
const amountTotal = document.getElementById('amount-total')
amountTotal.innerText=depositAmount;
depositInput.value='';
})