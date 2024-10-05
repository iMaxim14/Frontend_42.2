// метод reduce

const techProduct = [
    {name: "Laptop", price: 600},
    {name: "Phone", price: 400},
    {name: "Tablet", price: 300},
];

const totalPrice = techProduct.reduce((totalPrice, product)=>{
    return totalPrice + product.price;
}, 20);

console.log(totalPrice);