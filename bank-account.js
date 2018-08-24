var account = {
	balance: 0
};


// deposit function
function deposit(account, amount) {
	account.balance += amount;
}

// withdraw function
	function withdraw(account, amount) {	
		account.balance -= amount;
}

// getBalance function
		function getBalance(account) {
			return account.balance 
}

deposit(account, 1000);

console.log(getBalance(account));

withdraw(account, 121);
console.log(getBalance(account));