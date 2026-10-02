window.onload = function () {
    loadCustomers();
    loadExpenses();
};

function addCustomer() {
    let name = document.getElementById("name").value;
    let status = document.getElementById("status").value;

    if (name === "") {
        alert("Enter customer name");
        return;
    }

    let customers = JSON.parse(localStorage.getItem("customers")) || [];

    customers.push({ name: name, status: status });

    localStorage.setItem("customers", JSON.stringify(customers));

    loadCustomers();

    document.getElementById("name").value = "";
}

function loadCustomers() {
    let customers = JSON.parse(localStorage.getItem("customers")) || [];

    let list = document.getElementById("customerList");
    list.innerHTML = "";

    customers.forEach(function (c) {
        let li = document.createElement("li");
        li.textContent = c.name + " - " + c.status;
        list.appendChild(li);
    });
}

function addExpense() {
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

    if (amount === "") {
        alert("Enter amount");
        return;
    }

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    expenses.push({ amount: Number(amount), category: category });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    loadExpenses();

    document.getElementById("amount").value = "";
}

function loadExpenses() {
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    let list = document.getElementById("expenseList");
    let total = 0;

    list.innerHTML = "";

    expenses.forEach(function (e) {
        let li = document.createElement("li");
        li.textContent = e.category + " - ₹" + e.amount;
        list.appendChild(li);

        total += e.amount;
    });

    document.getElementById("totalAmount").textContent = total;
}