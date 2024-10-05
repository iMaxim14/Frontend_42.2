/*Добавить новые элементы в начало и в конец списка
Изменить текст второго элемента списка
Удалить третий элемент
Изменить стили по своему усмотрению для четвертого элемента*/

// Добавление первого элемента
let addElement = document.createElement("li");
addElement.textContent = "Дыня";
let list = document.querySelector("ol");
list.prepend(addElement);

// Добавление второго элемента
let addElementNumberTwo = document.createElement("li");
addElementNumberTwo.textContent = "Виноград";
let listTwo = document.querySelector("ol");
listTwo.append(addElementNumberTwo);

// Изменение элемента
let testElement = document.querySelector(".orange");
testElement.textContent = "Малина";

// Удаление элемента
let removeElement = document.querySelector("#pear");
removeElement.remove();

// Изменение стилей
let cardTable = document.querySelector("ol");
cardTable.style.backgroundColor = "#1677CB";
cardTable.style.width = "100px";
cardTable.style.fontSize = "20px";
cardTable.style.padding = "30px";

let text = document.querySelectorAll("li");
text.style.color = "white";


