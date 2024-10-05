// Выбор элементов
let infoCard = document.querySelector(".info-card");
let nameOfSpaceShip = document.querySelector(".name-of-spaceship");
let manufacturerSpaceship = document.querySelector(".manufacturer-info-input");
let spaceshipCrew = document.querySelector(".crew-of-spaceship");
let spaceshipMaxSpeed = document.querySelector(".max-speed-of-spaceship");
let manufacturerBlock = document.querySelector(".manufacturer-info");

let hideButton = document.querySelector("button");

// Создание объекта
const spaceship  = {
    name: "TL-1230",
    manufacturer: "spaceXXL",
    crew: "Bruno Fernandes",
    maxSpeed: 28000 +  " km/h",
}

// Заполнение полей
nameOfSpaceShip.textContent = spaceship.name;
manufacturerSpaceship.textContent = spaceship.manufacturer;
spaceshipCrew.textContent = spaceship.crew;
spaceshipMaxSpeed.textContent = spaceship.maxSpeed;



let hideManufacturer = (event) => {
    event.preventDefault();
    console.log("Произошло событие");
   if (manufacturerBlock.style.display === "block"){
       manufacturerBlock.style.display = "none";
       infoCard.style.height = "600px";
       hideButton.textContent = "Show manufacturer";
    } else{
        manufacturerBlock.style.display = "block";
        infoCard.style.height = "726px";
        hideButton.textContent = "Hide manufacturer";
    }
};

hideButton.addEventListener("click", hideManufacturer);