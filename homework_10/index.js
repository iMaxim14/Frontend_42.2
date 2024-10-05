// Задание 1. Создайте массив строк и выведите в консоль его длину, первый и последний элементы массива
let isArray = ["Apple", "Orange", "Banana"];
console.log(isArray.length);
console.log("First element: " + isArray[0]);
console.log("Last element: " + isArray[isArray.length - 1]);

//Задание 2. Создайте новый массив на основе массива [1, 2, 3, 4, 5, 6], в который будут входить только четные числа из заданного массива
let newIsArray = [1, 2, 3, 4, 5, 6];
let evenNumbers = []
for (let i = 0; i < newIsArray.length; i++){  
    if ( newIsArray[i] % 2 === 0){
        evenNumbers.push(newIsArray[i]);
    }
}
console.log(evenNumbers);

//Задание 3. Найдите максимально и минимальное значения из массива [3, 7, 2, 9, 4] и вывидите их в консоль. 
//! Не используя математические методы max и min, только циклы
let numbers = [3, 7, 2, 9, 4];
let max = numbers[0];
let min = numbers[0];
for (let i of numbers){
if(i > max){
    max = i;
} 
if(i < min){
    min = i;
}
}
console.log(`Max - ${max}`);
console.log(`Min - ${min}`);