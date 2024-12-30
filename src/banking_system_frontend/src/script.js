document.addEventListener('DOMContentLoaded', () => {
    const transferForm = document.getElementById('transfer-form');
    const contactForm = document.getElementById('contact-form');
    const transactionList = document.querySelector('.transaction-list');

    // Function to handle fund transfer
    transferForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const recipientAccount = document.getElementById('recipient-account').value.trim();
        const amount = parseFloat(document.getElementById('amount').value.trim());

        if (!recipientAccount || isNaN(amount) || amount <= 0) {
            alert('Please enter valid recipient account and amount.');
            return;
        }

        // Simulate a blockchain transaction (this would be replaced with actual blockchain interaction)
        const transaction = {
            date: new Date().toISOString().split('T')[0],
            type: 'Transfer',
            amount: `-$${amount.toFixed(2)}`,
            recipient: recipientAccount
        };

        // Display the transaction in the transaction history
        displayTransaction(transaction);

        // Reset the form
        transferForm.reset();
    });

    // Function to handle contact form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate sending a message (this would be replaced with actual email sending logic)
        alert('Message sent successfully!');

        // Reset the form
        contactForm.reset();
    });

    // Function to display a transaction in the transaction history
    function displayTransaction(transaction) {
        const transactionItem = document.createElement('div');
        transactionItem.className = 'transaction-item';
        transactionItem.innerHTML = `
            <p><strong>Date:</strong> ${transaction.date}</p>
            <p><strong>Type:</strong> ${transaction.type}</p>
            <p><strong>Amount:</strong> ${transaction.amount}</p>
            <p><strong>Recipient:</strong> ${transaction.recipient}</p>
        `;
        transactionList.appendChild(transactionItem);
    }
});
