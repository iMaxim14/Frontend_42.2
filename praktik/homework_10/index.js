//Задание №1
let arrFruits = ["Apple", "Pear", "Orange", "Cherry"];
console.log(arrFruits[0]);
console.log(arrFruits[arrFruits.length - 1]);
// ----- Ещё разок



// Задание №2
let isArray = [];
let newIsArray = [1, 2, 3, 4, 5, 6];

for(let arrElement = 0; arrElement < newIsArray.length; arrElement++){
    if(newIsArray[arrElement] % 2 == 0){
        isArray.push(newIsArray[arrElement])
        console.log(isArray);
    }
}
// ----- Ещё разок


// Задание №3
let minMaxArray = [3, 7, 2, 9, 4];
let min = minMaxArray[0];
let max = minMaxArray[0];
for(let arrElement of minMaxArray){
    if(min > arrElement){
        min = arrElement;
    }
    if(max < arrElement){
        max = arrElement;
    }
}
console.log("Max: " + max);
console.log("Min: " + min);
// ----- Ещё разок

