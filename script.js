let balance = 1000;

function updateBalance() {
    document.getElementById("balance").textContent = balance;
}

function deposit() {
    let amount = Number(document.getElementById("amount").value);

    if (amount > 0) {
        balance += amount;
        updateBalance();
        document.getElementById("message").textContent =
            "₹" + amount + " deposited successfully.";
    } else {
        document.getElementById("message").textContent =
            "Enter a valid amount.";
    }

    document.getElementById("amount").value = "";
}

function withdraw() {
    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {
        document.getElementById("message").textContent =
            "Enter a valid amount.";
    } else if (amount > balance) {
        document.getElementById("message").textContent =
            "Insufficient balance.";
    } else {
        balance -= amount;
        updateBalance();
        document.getElementById("message").textContent =
            "₹" + amount + " withdrawn successfully.";
    }

    document.getElementById("amount").value = "";
}