// Деструктурирующее присваение 
// let colorsConfig = ["dark", "light", "32px"];

// Вариант 1 - без деструктуризации
// let theme = colorsConfig[0];
// let secondTheme = colorsConfig[1];
// console.log(theme, secondTheme);

// Вариант 2 - с декструктуризациеи
// let [theme, secondTheme, size="20px"] = colorsConfig;
// console.log(theme, secondTheme, size);


// Встроенные методы для взаимодеиствия с пользователем

// Метод alert
// let message = "Hello, User";
// let alertResult = alert(message);
// console.log(alertResult);


// Метод prompt
// При нажатии на кнопку Ok метод prompt вернёт значение из поля или пустую строку, если значения нет
// При нажатии на кнопку "Отмена" метод prompt вернёт null, даже если в поле есть значение
// let resultPrompt = prompt("Введите свои возраст", 100);
// console.log(resultPrompt);

// Метод confirm
// let resultConfirm = confirm("Вы являетесь администратором?" );
// console.log(resultConfirm);


// ------------Функции. Основы
function schowMessage(){
    let message = "Hello, User";
    console.log(message);
}

schowMessage();
// console.log(message); - ошибка

// функции с параметрами

// function newSchowMessage(name, age){
//     if(age === undefined){
//         console.log("Возраст отсутствует");
//     } else {
//         let message = `Hello, ${name}. Age ${age}`;
//         console.log(message);
//     }
// } 

function newSchowMessage(name = "John", age=20){
        let message = `Hello, ${name}. Age ${age}`;
        console.log(message);
    } 

newSchowMessage("Arnold", 17);
newSchowMessage("Tom", 30);
newSchowMessage("Anna");
console.log(undefined, 24);


// Возвратное значение

function getFullName() {
    let name = "Bob";
    let surname = "Smith";
    let userName = `${name} ${surname};
    return userName
}
