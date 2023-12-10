// Function to extract the expense value from an input field and clear the field
function expenseFieldId(elementId) {
    const expenseInputField = document.getElementById(elementId);

    const expenseInputString = expenseInputField.value;
    const expenseInputNumber = parseInt(expenseInputString);
    expenseInputField.value = ''; // Clear the input field for the next input
    return expenseInputNumber;
}
// clone for issue with income 
function cloneExpenseFieldId(elementId) {
    const expenseInputField = document.getElementById(elementId);

    const expenseInputString = expenseInputField.value;
    const expenseInputNumber = parseInt(expenseInputString);
    return expenseInputNumber;
}

// Function to set the text value of an element
function setValue(elementId, value) {
    const setValueId = document.getElementById(elementId);
    setValueId.innerText = value;
}
// Function to extract a numeric value from an element's text and return it
function balanceField(elementId) {
    const balanceId = document.getElementById(elementId);
    const balanceIdString = balanceId.innerText;
    const balanceIdNumber = parseInt(balanceIdString);
    return balanceIdNumber;
}