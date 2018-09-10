let mainWrapperDiv = document.createElement('div');
mainWrapperDiv.id = "mainWrapper"
document.body.appendChild(mainWrapperDiv)

function displayOnPage(text,elementType){
    let t = document.createTextNode(text);
    let element = document.createElement(elementType);
    element.appendChild(t);
    mainWrapperDiv.appendChild(element);
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
    displayOnPage(letterUpperCase,'span')
})


const numbers = [1,2,3,4,5,6,7];

function betterMap(array, callbackFunction){
    for(let i = 0; i < array.length; i++){
        array[i] = callbackFunction(array[i]);
    }
    return array
}

// console.log(betterMap(numbers, x => x * 2))

function betterSome(array, callbackConditionalTest){
    let result = false
    for(let i = 0; i < array.length; i++){
        if(callbackConditionalTest(array[i]) === true){
            result = true;
        }
    }
    return result;
}
// console.log(betterSome(numbers, x => x % 2 === 0));

function betterFind(array, callbackFunction){

    for (let i = 0; i < array.length; i++){
        if(callbackFunction(array[i]) === true){
            return array[i];
        }
    }
}

// console.log(betterFind(numbers, x => x > 2))
