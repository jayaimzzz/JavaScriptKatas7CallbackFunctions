let mainWrapperDiv = document.createElement('div');
mainWrapperDiv.id = "mainWrapper"
document.body.appendChild(mainWrapperDiv)

function displayOnPage(text,elementType){
    let t = document.createTextNode(text);
    let element = document.createElement(elementType);
    element.appendChild(t);
    let br = document.createElement('br');
    mainWrapperDiv.appendChild(element);
    mainWrapperDiv.appendChild(br);
}
function betterForEach(array, callbackFunction){
    for (let i = 0; i < array.length; i++){
        const arrayItem = array[i]
        callbackFunction(arrayItem, i, array)
    }
}
const lowerCaseLetters = ['a','b','c','d','e']

betterForEach(lowerCaseLetters, function(letter){
    let letterUpperCase = letter.toUpperCase()
   console.log(letterUpperCase)
})


const numbers = [1,2,3,4,5,6,7];

function betterMap(array, callbackFunction){
    let result = []
    for(let i = 0; i < array.length; i++){
        result = callbackFunction(array[i]);
    }
    return result
}
console.log(betterMap(numbers, x => x * 2))

function betterSome(array, callbackConditionalTest){
    let result = false
    for(let i = 0; i < array.length; i++){
        if(callbackConditionalTest(array[i]) === true){
            result = true;
        }
    }
    return result;
}
console.log(betterSome(numbers, x => x % 2 === 0));

function betterFind(array, callbackFunction){

    for (let i = 0; i < array.length; i++){
        if(callbackFunction(array[i]) === true){
            return array[i];
        }
    }
}

console.log(betterFind(numbers, x => x > 2))

function findIndex(array, callbackFunction){
    for (let i = 0; i < array.length; i ++){
        if(callbackFunction(array[i]) === true){
            return i;
        }
    }
    return -1
}

console.log(findIndex(lowerCaseLetters, x => x == 'd'))

function every(array, callbackFunction){
    let result = true;
    for (let i = 0; i < array.length; i++){
        if(callbackFunction(array[i]) === false){
            result = false;
        }
    }
    return result;
}

console.log(every(numbers, x => x < 8));

function filter (array, callbackFunction){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (callbackFunction(array[i]) === true){
            result.push(array[i])
        }
    }
    return result;
}

console.log(filter(numbers, x => x > 4))

function concat(array1,array2){
    let result = [];
    for (i = 0; i < array1.length; i++){
        result.push(array1[i])
    }
    for (i = 0; i < array2.length; i++){
        result.push(array2[i])
    }
    return array1;
}

console.log(concat(numbers, lowerCaseLetters))

function includes(array, what){
    let result = false;
    for (let i = 0; i < array.length; i++){
        if (array[i] === what){
            result = true;
        }
    }
    return result;
}

console.log(includes(lowerCaseLetters, 'a'))
