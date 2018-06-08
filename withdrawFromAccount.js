// withdraw from account

const account1 = {
  name: 'nitesh',
  totalAmount: 2400,
  deductAmount: function(amount) {
      this.totalAmount -= amount;
      return 'Amount in account' + this.totalAmount;
  }
}

const account2 = {
      name: 'kumar',
      totalAmount: 1400,
}

const withdrawFromAccount = function(amount) {
  return this.account1.deductAmount.bind(account2,amount);
}

console.log(withdrawFromAccount(100)());
console.log(withdrawFromAccount(200)());