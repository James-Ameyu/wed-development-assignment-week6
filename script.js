
// SpendWise Budget Tracker

// Function to calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Function to display budget results
function displayResults(budget, expenses, balance) {
    console.log("----- SpendWise Budget Report -----");
    console.log("Total Budget: KES " + budget);
    console.log("Total Expenses: KES " + expenses);
    console.log("Remaining Balance: KES " + balance);

    document.getElementById("budgetOutput").textContent =
        "Total Budget: KES " + budget;

    document.getElementById("expensesOutput").textContent =
        "Total Expenses: KES " + expenses;

    document.getElementById("balanceOutput").textContent =
        "Remaining Balance: KES " + balance;
}

// Collect information when the button is clicked
document.getElementById("budgetButton").addEventListener("click", function () {

    // Collect user input using prompts
    let budgetInput = prompt("Enter your total budget in KES:");
    
    if (budgetInput === null || budgetInput.trim() === "") {
        alert("Please enter a valid budget.");
        return;
    }

    let expensesInput = prompt("Enter your total expenses in KES:");

    if (expensesInput === null || expensesInput.trim() === "") {
        alert("Please enter your expenses.");
        return;
    }

    // Convert input strings into numbers
    let budget = Number(budgetInput);
    let expenses = Number(expensesInput);

    // Validate user input
    if (
        !Number.isFinite(budget) ||
        !Number.isFinite(expenses) ||
        budget < 0 ||
        expenses < 0
    ) {
        alert("Please enter valid positive numbers.");
        return;
    }

    // Perform budget calculation
    let balance = calculateBalance(budget, expenses);

    // Display results
    displayResults(budget, expenses, balance);

    // Show spending status
    if (balance > 0) {
        console.log("Status: You are within your budget.");
    } else if (balance === 0) {
        console.log("Status: You have used your entire budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }
});
