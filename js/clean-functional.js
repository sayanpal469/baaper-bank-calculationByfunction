function getInput(id) {
    const input = document.getElementById(id);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    input.value = '';

    return inputValue
}

function innerTextId(id) {
    const innerTextId = document.getElementById(id);
    const idText = innerTextId.innerText;
    const innerTextNumber = parseFloat(idText)
    return innerTextNumber;
}

function updateTotal(totalFieldId, amount) {
    const previousTotal = innerTextId(totalFieldId)
    const newTotal = previousTotal + amount;
    document.getElementById(totalFieldId).innerText = newTotal
}

function updateBalance(checkAmount) {
    const previousBalanceAmount = innerTextId('balance-total');
    const deposit = innerTextId('deposit-total');
    const withdraw = innerTextId('withdraw-total');
    let newBalance;    
    if (checkAmount == true) {
       //newBalance = previousBalanceAmount + totalAmount;
       newBalance = deposit - withdraw + previousBalanceAmount;
    } else {
        newBalance = previousBalanceAmount - withdraw;
    } 
    document.getElementById('balance-total').innerText = newBalance;
}

// deposit 
document.getElementById('deposit-button').addEventListener(
    'click',
     function () {
         const depositAmount = getInput('deposit-input');
         if (depositAmount > 0) {
            updateTotal('deposit-total', depositAmount)
            updateBalance(true)
         }
     }
)

// withdraw
document.getElementById('withdraw-button').addEventListener(
    'click',

    function () {
        const withdrawAmount = getInput('withdraw-input');
        const balance = innerTextId('balance-total')
        if(withdrawAmount > 0  && withdrawAmount <= balance) {
            updateTotal('withdraw-total', withdrawAmount)
            updateBalance(false)
        }
    }
)