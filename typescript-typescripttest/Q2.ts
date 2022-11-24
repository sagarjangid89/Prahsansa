var product =[{ProductId:"1" ,Name:"Earphones",Price:500,Quantity:4},
              {ProductId:"2" ,Name:"Headphones",Price:1500,Quantity:15},
              {ProductId:"3" ,Name:"Charger",Price:5000,Quantity:6}]

function productList()
{
    console.log(product.length-1);
    for(let i=0;  i < product.length; i++){
     if(product[i].Quantity >10)
     {
        console.log(product[i]);
     }
     
    }
}

function listProduct()
{let totalPrice : number= 0;
    for(let i = 0; i< product.length;i++){
        totalPrice += product[i].Price;
        let productDiscount : number = 0;
        productDiscount = product[i].Price - product[i].Price * 5 / 100
           console.log(`Product Id: ${product[i].ProductId} Name: ${product[i].Name} 
            Price: ${product[i].Price}} 
            Discount: ${productDiscount}`);
        
       }
       console.log(`Total Price ${totalPrice}`)
}


productList();