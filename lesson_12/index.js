//------Function hoisting
// Создаем функцию Function declaration
function add(a, b){
   return a + b;
}

// 1-и пример - вызов функции add(Function declaration)
console.log(add(20,30));

// 2-и пример - вызов функции divide(Function expression)
console.log(divide(10, 5))  ;

// Создаем функцию Function expression
const divide = function(){
    return x / y;
}
console.log(divide);

//---------Стрелочные функции
let getNewNumber = num => num + 10;

console.log(getNewNumber(10));

// Функция в качестве аргумента

let performOperation = (num, num2, operation) => {
    let result = operation(num, num2);
    return result;
}


let divideFunc = (a, b) => a / b;

console.log(performOperation(2,1, divideFunc));
console.log(performOperation(4,5, (x,y) => x * y));