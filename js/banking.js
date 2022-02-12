function inputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText)
    // clear input
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
        const totalElement = document.getElementById(totalFieldId);
        const totalText = totalElement.innerText;
        const previousTotal = parseFloat(totalText);

        totalElement.innerText = previousTotal + amount; 

}


function updateBalance(amount, isAdd) {
        const balanceUpdate = document.getElementById('balance-total');
        const balanceText = balanceUpdate.innerText;
        const previousBalanceAmount = parseFloat(balanceText);
        
        if (isAdd == true) {
            balanceUpdate.innerText = previousBalanceAmount + amount;
        } else {
            balanceUpdate.innerText = previousBalanceAmount - amount;
        }
}

document.getElementById('deposit-button').addEventListener(
    'click',

    function () {
        
        const depositAmount = inputValue('deposit-input');

        if (depositAmount > 0) {
            updateTotalField('deposit-total', depositAmount)
            updateBalance(depositAmount, true);
        } else {
            alert('Please Give Positive Number')
        }

    }
)

// withdraw 

document.getElementById('withdraw-button').addEventListener(
    'click',

    function () {
        const withdrawAmount = inputValue('withdraw-input')
        if (withdrawAmount > 0) {
            updateTotalField('withdraw-total', withdrawAmount)
            updateBalance(withdrawAmount, false);
        } 
        else {
            alert('Please Give Positive Number')
        }
    }
)