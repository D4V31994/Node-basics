var accounts = [];

function createAccount(account) {
	accounts.push(account);
	return account;
}

function getAccount(username) {
	var matchedAccount;
	
	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
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

var davidsAccount = createAccount({
	username: 'David',
	balance: 0
});

deposit(davidsAccount, 100);
console.log(getBalance(davidsAccount));

withdraw(davidsAccount, 11);
console.log(getBalance(davidsAccount));


var existingAccount = getAccount('David');
console.log(getBalance(davidsAccount));

var jensAccount = createAccount({
	username: 'jen001', 
	balance: 12
});

console.log(accounts);

var existingJensAccount = getAccount('jen001');
console.log(existingJensAccount);



