// --- Обработчик событий для кнопок

// Выбор необходимых элементов
let infoCard = document.querySelector(".info-card");
let addButton = document.querySelector(".add-button");
let hideButton = document.querySelector(".hide-button");

// Написание логики для кнопок
let addCardFunction = () => {
    //console.log("Add");
    // Изменение видимости
    // Вариант 1 - style
    //infoCard.style.display = "flex";
    //infoCard.style.opacity = "1";

    // Вариант 2 - удаление класса через removeAttribute
    //infoCard.removeAttribute("class");

     // Вариант 3 - добавление дополнительного класса
     infoCard.classList.remove("hide");

};

let hideCardFunction = () => {
    //console.log("Hide");
    // Изменение видимости
    // Вариант 1 --- style
    //infoCard.style.display = "none";
    //infoCard.style.opacity = "0";

    // Вариант 2 - добавление класса черещ setAttribute
    //infoCard.setAttribute("class", "hide");

    // Вариант 3 - добавление дополнительного класса
    infoCard.classList.add("hide");
};


// Привязка обработчиков к кнопкам
addButton.addEventListener("click", addCardFunction);
hideButton.addEventListener("click", hideCardFunction);


// --- Обработчик событий для поля
let searcheField = document.querySelector("#search-input");

let changeInput = () => (event) => {
    console.log(event.target.value);
}

searcheField.addEventListener("change", changeInput);

/*searcheField.addEventListener("change", (event) => {
    console.log(event.target.value);
});*/


