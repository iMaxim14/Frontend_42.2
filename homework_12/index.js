let arrayProcessor = (inputArray, callbackFunction) => {
    newArray = [];
    for(let i of inputArray){
        newArray.push(i)
    }

    return callbackFunction(newArray);
}

let getUpperCaseArray = (arrayForFunc) => {
    let newUpperCaseArray = [];
  
    for (let i of arrayForFunc) {
      let upperElement = i.toUpperCase();
      newUpperCaseArray.push(upperElement);
    }
  
    return newUpperCaseArray;
  };
  
  let getSumArrayLength = (arrayForFunc) => {
    let sum = 0;
  
    for (let i of arrayForFunc) {
      sum += i.length;
    }
  
    return sum;
  };
  
  let testArray = ["Apple", "Orange", "Pear", "Banana"];

  let upperCaseResult = arrayProcessor(testArray, getUpperCaseArray);
  let arraySumResult = arrayProcessor(testArray, getSumArrayLength);
  
  console.log(upperCaseResult);
  console.log(arraySumResult);
