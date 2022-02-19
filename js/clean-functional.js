function getInput(id) {
    const inputId = document.getElementById(id)
    const inputIdText = inputId.value;
    const inputValue = parseFloat(inputIdText);
    inputId.value = '';
    return inputValue;
}

function innerTextTotal(id) {
    const totalId = document.getElementById(id);
    const totalText = totalId.innerText;
    const totalValue = parseFloat(totalText);
    return totalValue;
}

function updateTotal(totalId, amount) {
    const total = document.getElementById(totalId);
    const totalIdText = total.innerText;
    const totalValue = parseFloat(totalIdText);
    const totalAmount = totalValue + amount;
    total.innerText = totalAmount;
}

function balanceTotal(isadd) {
    let newBalance = innerTextTotal('balance-total');
    const deposit = innerTextTotal('deposit-total');
    const withdraw = innerTextTotal('withdraw-total');
    if (isadd == true) {
        newBalance = deposit - withdraw + newBalance;
    } else {
        newBalance = newBalance - withdraw;
    }
    document.getElementById('balance-total').innerText = newBalance
}

// deposit
document.getElementById('deposit-button').addEventListener(
    'click', 

    function () {
        const depositAmount = getInput('deposit-input');
        if (depositAmount > 0) {
            updateTotal('deposit-total', depositAmount);
            balanceTotal(true);
        } else {
            alert('please input a positive number')
        }
    }
)

// withdraw
document.getElementById('withdraw-button').addEventListener(
    'click',

    function () {
        const withdrawAmount = getInput('withdraw-input');
        const balance = innerTextTotal('balance-total');
        if (withdrawAmount > 0 && withdrawAmount <= balance) {
            updateTotal('withdraw-total', withdrawAmount);
            balanceTotal(false)
        } else {
            alert('please input a positive number less than balane')
        }
    }
)