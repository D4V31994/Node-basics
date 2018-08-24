var accounts = [];

function createAccount(account) {
    accounts.push(account);
    return account;
}

function getAccount(username) {
    var matchedAccount;{

    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].username === username) {
            matchedAccount = accounts[i];
        }
    }
    return matchedAccount;
};

function deposit(account, amount) {
    if (typeof amount === 'number') {
        account.balance += amount;
    } else {
        console.log('deposit failed. amount is not a number');
    }
}

    function withdraw(account, amount) {
        if (typeof amount === 'number') {
        account.balance -= amount;
    } else {
        console.log('withdraw failed. amount is not a number.');
    }
}

        function getBalance(account) {
            return account.balance
}

function createBalanceGetter(account) {
    return function () {
        return account.balance;
    }
}

var david = createAccount({
    username: 'David',
    balance: 0
});

deposit(david, 120);
withdraw(david, 'my string');
// there was a problem with this line. Look @ it later.

var david2 = getAccount('David');
var getDavid2Balance = createBalanceGetter(david2);

console.log(getDavid2Balance());
