//выбор элементов
let buttonResult = document.querySelector(".button-result");
let resultContainer = document.querySelector(".flex-card-container-mod");
let form = document.querySelector("#id-form");
console.log(form);
//функция для показа карточки
let showResultCard = (event)=>{
    event.preventDefault();
//console.log("победа");
let userName = document.querySelector("#user-name_").value.trim();
let userSurname = document.querySelector("#user-surname_").value.trim();
let userAge = document.querySelector("#age_").value.trim();
let jobPosition = document.querySelector("#job-position_").value.trim();

//let userAgeNumber = Number(userAge);
console.log(typeof userAgeNumber);

if(userName === "" || userSurname === "" || userAge === "" || jobPosition === ""){
    resultContainer.classList.remove("add-card-container");
    let message = "Введите следующие данные:\n";
         if (userName === "") {
            message += 'Имя\n';
         }
         if (userSurname === "") {
            message += 'Фамилия\n';
         }
         if (userAge === "") {
            message += 'Возраст (18-60)\n';
         }
         if (jobPosition === "") {
            message += 'Должность сотрудника';
         }
    setTimeout(() => {
        alert(message)
    }, 100);
} else {
let userNameResult = document.querySelector("#result-user-name");
let userSurnameResult = document.querySelector("#result-user-surname");
let userAgeResult = document.querySelector("#result-user-age");
let jobPositionResult = document.querySelector("#result-user-job");

userNameResult.textContent = userName;
userSurnameResult.textContent = userSurname;
userAgeResult.textContent = userAge;
jobPositionResult.textContent = jobPosition;

resultContainer.classList.add("add-card-container");
}
}
//привязка событий submit в форме
form.addEventListener("submit", showResultCard);


//padding в форме placeholder
//названия классов и АйДи в html 