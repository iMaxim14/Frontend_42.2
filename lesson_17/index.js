//Получить массив ключей/значений объекта color
const color = {
    name: "white",
    code: "fff",
    prices: {
        price: 100,
        sale: true,
    }
};

const colorKeysArray = Object.keys(color);
console.log(colorKeysArray);

const colorValueArray = Object.values(color);
console.log(colorValueArray);

const colorKey = Object.keys(color.prices);
console.log(colorKey);

// Пример с примитивными типами данных
const userName = "Tom";
console.log(userName);

let adminName = userName;
console.log(adminName);

adminName = "Bob";
console.log(userName, adminName);

// Ссылочный тип данных (в переменной будет храниться только ссылка на объект, массив или функция)
const customerData  ={
    customerName: "Mary",
    company: "Apple",
};

customerData.company = "Facebook";
console.log(customerData);


// Так делать нельзя !!!!!
const userData = customerData;
console.log(userData);

userData.customerName ="John";
console.log(userData);
console.log(customerData); // name изменилось в customerData, хотя изменили его в userData


// Деструктуризация объекта
const bookObjeckt = {
    bookName: "Great Gatsby",
    price: 20,
    autor: "Fitzegarld",
};

const newBookObj = {...bookObjeckt};
console.log(newBookObj);

newBookObj.price = 30;
console.log(newBookObj);
console.log(bookObjeckt);

// передача аргументов в функциях с помощью деструктуризации (оператор расширения)
const numbersOperation = (a, b, c, d) => {
    return a - b + c / d;
}

const numbers = [34, -9, 23, 1];

console.log(numbersOperation(...numbers));

// деструктуризирующее присваивание
const fruitObj = {
    nameFruit: "Apple",
    price: 30,
};

let name = fruitObj.nameFruit;
let priceObj = fruitObj.price;
console.log(name, priceObj);

const {nameFruit, price: fruitPrice, shop: fruitShop = "Shop name"} = fruitObj;
console.log(fruitShop);

// деструктуризирующее присваивание массива
//const[a, b] = (arr)

//map
const words = ["red", "grape", "note", 'black'];

const newWords = words.map((word, index, arr) => {
  // console.log(`${index + 1} - ${word} in array ${arr}`);

  return word.length
});

// console.log(newWords);
// console.log(words);

const wordsObjAr = words.map((word, i)=>{
  return {
    index: i,
    position: i+1,
    word: word,
    length: word.length
  }
})

console.log(wordsObjAr);




//forEach
const list = document.querySelector(".list");

const cars = ["BMW", "Tesla", "Aston Martin"];

cars.forEach((car) => {
    const listElement = document.createElement("li");
    listElement.textContent = car;
    list.append(listElement);
});


// forEach с возвратом
const newArray = cars.forEach((car) => {
    return car.length;
});

console.log(newArray);


// Метод для фильтрации исходного массива (возвращает элементы, которые удовлетворяют условия в callback)
const products = [
    {prodectName: "Milk", price: 100,
    },
    {prodectName: "Bread", price: 120,
    },
    {prodectName: "Grape", price: 150,
    },
];

//const filteredProducts = products.filter(product =>product.price > 110);
const filteredProducts = products.filter(product =>product.prodectName === "Milk");

console.log(filteredProducts);

// Метод reverse (меняет массив на обратный порядок) - мутирующий метод
const productsName = ["Milk", "Sugar", "Bread"];
productsName.reverse();
console.log(productsName);

// Метод join - превращаем массив в строку с разделителем- немутирующий метод
const str = productsName.join(", ");
console.log(str);
console.log(productsName);

// Метод includes - проверяет, есть ли переданный элемент в массиве (возвращает boolean) - немутирующий метод
const isElementInclude = productsName.includes("Milk");
console.log(isElementInclude);