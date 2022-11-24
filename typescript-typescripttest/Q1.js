var customerList = [
    { customerId: 1, name: "Prashansa" },
    { customerId: 2, name: "Lakshita" }
];
var savingAccountList = [
    { accountId: "1234", customerId: 1, balance: 20000 },
    { accountId: "13456", customerId: 2, balance: 30000 }
];
function addCustomer(customer) {
    customerList.push({ customerId: customer.customerId, name: (customer.name).trim() });
}
function withdrawBalance(customerId, balance) {
    var selectedCustomer = savingAccountList.filter(function (each) { return each.customerId === customerId; });
    if (selectedCustomer.balance >= balance) {
        selectedCustomer.balance -= balance;
    }
    else {
        console.log("Low balance in Account");
    }
}
function depositBalance(customerId, balance) {
    var selectedCustomer = savingAccountList.filter(function (each) { return each.customerId === customerId; });
    selectedCustomer.balance += balance;
}
addCustomer({ customerId: 1, name: "Prashansa" });
withdrawBalance(1, 100);
depositBalance(2, 200);
console.log(customerList);
console.log(savingAccountList);
