/* 
-Вы получили массив с ценами на товар (создайте переменную, в которой будет храниться массив). 
Значения массива [100, 400, 900, 300, 500].
- Необходимо отобразить каждый из элементов массива на странице в отдельном блоке
- Стилизация на ваше усмотрение
- Дополнительная задача: Создайте кнопку "Filter", при нажатии на которую на странице
будут отображаться только блоки с ценами > 450*/

let priceContainer = document.querySelector(".prices-container");
let filterButton = document.querySelector(".filter-button")

let isArray = [100, 400, 900, 300, 500]

let schowElements = (pricesArray) => {
    pricesArray.forEach((price) => {
      let priceBlock = document.createElement("div");
      priceBlock.textContent = price;
      priceContainer.append(priceBlock);
    });
  };
  
schowElements(isArray);

let filterPrices = () => {
    priceContainer.innerHTML = ``;
    let filterArray = isArray.filter((price) => price > 450);
    schowElements(filterArray);
  };
  
  filterButton.addEventListener("click", filterPrices);