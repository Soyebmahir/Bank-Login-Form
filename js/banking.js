
//deposit and add in the deposit section
document.getElementById('deposit-button').addEventListener('click',() =>{

const depositInput =document.getElementById('deposit-input');

const depositAmount = depositInput.value ;

const amountTotal = document.getElementById('amount-total') 



const previousAmountTotal = amountTotal.innerText;
const currentAmountTotal = parseFloat( previousAmountTotal) + parseFloat( depositAmount);
amountTotal.innerText= currentAmountTotal;

//from now its all about balance

const balanceTotal =document.getElementById('balance-total');
const previousBalanceTotal =balanceTotal.innerText;
const currentBalance=parseFloat(previousBalanceTotal) +parseFloat(depositAmount);
balanceTotal.innerText =currentBalance;


depositInput.value='';
})

//withdraw and add in the withdraw section
document.getElementById('withdraw-button').addEventListener('click',()=>{

const withdrawInput =document.getElementById('withdraw-input');
const withdrawAmount = withdrawInput.value ;
const withdrawTotal = document.getElementById('withdraw-total')
const previousWithdrawAmount = withdrawTotal.innerText;

const currentWithdrawTotal =parseFloat(previousWithdrawAmount) +parseFloat( withdrawAmount);
withdrawTotal.innerText= currentWithdrawTotal ;

const balanceTotal =document.getElementById('balance-total');
const previousBalanceTotal =balanceTotal.innerText;

const currentBalance=parseFloat(previousBalanceTotal) - parseFloat(withdrawAmount);
balanceTotal.innerText =currentBalance;

withdrawInput.value='';
})