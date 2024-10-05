//Задача 1. У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите функцию для удвоения каждого значения в массиве 
//(массив нужно передать аргументом) и вывода результата в консоль. Вызовите функцию для демонстрации результата

let isArray = [2, 4, 6, 8, 10];
function createArray(array){
    for(let i = 0; i < array.length; i++){ // не могу понять, почему, если писать через for of, то выдаёт совсем другие, некорректные значения 
        array[i] = array[i] * 2;
    }
    console.log(array);
}
createArray(isArray);

//Задача 2. Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки.
// Для отображения результа работы функции, вызовите её три раза с различными параметрами, результат каждого вызова присвойте отдельной переменной и выведите переменные в консоль

function createText(text, number){
    return text.slice(0, number);
}
let firstExample = createText("Привет, рассвет", 6);
let newExample = createText("Покачивает", 4)
let lastExample = createText("Всё переплетено", 3)
console.log(firstExample);
console.log(newExample);
console.log(lastExample);

// Задача 3. У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите функцию для вычисления среднего значения 
//элементов массива (массив нужно передать аргументом) и вывода результата в консоль. Вызовите функцию для демонстрации результата

let isNewArray = [10, 15, 20, 25, 30];

function calcArray(newArray){
    let sum = 0;
    for(let i = 0; i < newArray.length; i++){
       sum = sum + newArray[i];
    }
    let average = sum / newArray.length
    console.log(average);
}

calcArray(isNewArray);

