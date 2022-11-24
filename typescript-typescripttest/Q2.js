var product = [{ ProductId: "1", Name: "Earphones", Price: 500, Quantity: 4 },
    { ProductId: "1", Name: "Headphones", Price: 1500, Quantity: 15 },
    { ProductId: "3", Name: "Charger", Price: 5000, Quantity: 6 }];
function productList() {
    console.log(product.length - 1);
    for (var i = 0; i < product.length; i++) {
        if (product[i].Quantity > 10) {
            console.log(product[i]);
        }
    }
}
function listProduct() {
    var totalPrice = 0;
    for (var i = 0; i < product.length; i++) {
        totalPrice += product[i].Price;
        var productDiscount = 0;
        productDiscount = product[i].Price - product[i].Price * 5 / 100;
        console.log("Product Id: ".concat(product[i].ProductId, " Name: ").concat(product[i].Name, " \n            Price: ").concat(product[i].Price, "} \n            Discount: ").concat(productDiscount));
    }
    console.log("Total Price ".concat(totalPrice));
}
productList();
