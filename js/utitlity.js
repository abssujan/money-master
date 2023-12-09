// expense filed
function expenseFieldId(elementId){
    const expenseInputField = document.getElementById(elementId);
    const expenseInputString = expenseInputField.value;
    const expenseInputNumber = parseInt(expenseInputString);
    return expenseInputNumber;
}

// set value 
function setValue(elementId, value){
    const setValueId = document.getElementById(elementId);
    setValueId.innerText = value;
}

// balance field 
function balanceField(elementId){
    const balanceId = document.getElementById(elementId);
    const balanceIdString = balanceId.innerText;
    const balanceIdNumber = parseInt(balanceIdString);
    return balanceIdNumber
}