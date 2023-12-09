
// set-up a click event calculate button
document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodExpenses = expenseFieldId('food-expense');
    const rentExpenses = expenseFieldId('rent-expense');
    const clothesExpenses = expenseFieldId('clothes-expense');

    const totalCost = foodExpenses + rentExpenses + clothesExpenses;
    setValue('total-expenses', totalCost);
    const totalBalance = balanceField('total-expenses');
    const myIncome = expenseFieldId('income');
    const currentBalance = myIncome - totalBalance;
    setValue('balance', currentBalance);
})

// set-up a click event save button
document.getElementById('save-btn').addEventListener('click', function(){
    const savingParcent = expenseFieldId('save-input');
    const reamingBlance = balanceField('balance');

    const savingAmmount = ((savingParcent/100) * reamingBlance)
    setValue('saving-ammount', savingAmmount);
    const savedSavingAmmount = balanceField('saving-ammount');
    const reamingBlanceAfterSaving = reamingBlance -savedSavingAmmount;
    setValue('reaming-balance', reamingBlanceAfterSaving);
})