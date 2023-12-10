# Expense Calculator

A simple web application to calculate expenses and savings based on user input.

## Overview

This project provides a straightforward expense calculator that allows users to input their expenses and income to calculate total expenses, remaining balance, and savings. The application includes error handling to ensure valid input.

## Functions

### 1. `expenseFieldId(elementId)`

This function extracts the expense value from an input field identified by `elementId`, clears the field for the next input, and returns the numeric value.

### 2. `setValue(elementId, value)`

Sets the text value of an HTML element identified by `elementId` to the specified `value`.

### 3. `balanceField(elementId)`

Extracts a numeric value from an element's text identified by `elementId` and returns it.

## Usage

1. Open the `index.html` file in a web browser.

2. Enter your expenses and income in the respective input fields.

3. Click the "Calculate" button to calculate total expenses and remaining balance.

4. Optionally, click the "Save" button to calculate and display savings based on the provided percentage.

## Example

```javascript
// Calculate expenses
document.getElementById('calculate-btn').addEventListener('click', function() {
    // ... [Code snippet from the calculate button event handler]
});

// Save button event handler
document.getElementById('save-btn').addEventListener('click', function() {
    // ... [Code snippet from the save button event handler]
});
