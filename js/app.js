// Click event handler for the calculate button
document.getElementById('calculate-btn').addEventListener('click', function() {
    const foodExpenses = expenseFieldId('food-expense');
    const rentExpenses = expenseFieldId('rent-expense');
    const clothesExpenses = expenseFieldId('clothes-expense');

    // Check if any of the expenses are NaN before calculating the total
    if (!isNaN(foodExpenses) && !isNaN(rentExpenses) && !isNaN(clothesExpenses)) {
        const myIncome = cloneExpenseFieldId('income');

        // Check if the total expenses exceed the income
        if (foodExpenses > myIncome || rentExpenses > myIncome || clothesExpenses > myIncome) {
            alert("You don't have enough money for these expenses.");
        } else {
            // If expenses are within budget, proceed with calculations
            const totalCost = foodExpenses + rentExpenses + clothesExpenses;
            setValue('total-expenses', totalCost);
            const totalBalance = balanceField('total-expenses');
            const currentBalance = myIncome - totalBalance;
            setValue('balance', currentBalance);
        }
    } else {
        alert("Invalid input. Please enter valid numbers for all expenses.");
        // You might want to provide feedback to the user or take other actions
    }
});

// Click event handler for the save button
document.getElementById('save-btn').addEventListener('click', function(){
    const savingParcent = expenseFieldId('save-input');
    const reamingBlance = balanceField('balance');

    const savingAmmount = ((savingParcent/100) * reamingBlance)
    setValue('saving-ammount', savingAmmount);
    const savedSavingAmmount = balanceField('saving-ammount');
    const reamingBlanceAfterSaving = reamingBlance -savedSavingAmmount;
    setValue('reaming-balance', reamingBlanceAfterSaving);
})