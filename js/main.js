
let btnResult = document.querySelector('.result')
let inputArr = document.querySelector('.newArr')
let errMassege = document.querySelector('.err')
let successMassege = document.querySelector('.evenArr')
let maxNum = document.querySelector('.maxNum')
let remNumDub = document.querySelector('.DubNum')


// to take array from user
btnResult.addEventListener('click', () => {
    let rgx = /^\d+(?:,\s*\d+)*$/
    if (rgx.test(inputArr.value) == true) {
        errMassege.classList.add('d-none');
        inputArr.classList.remove('is-invalid')
        inputArr.classList.add('is-valid')
        let arrayNum = inputArr.value.split(",");
        let arrayEven = displayEvenNum(arrayNum);
        successMassege.classList.remove('d-none');
        successMassege.innerHTML = inputArr.value + ' => Even Numbers Is ' + arrayEven;
        let maxNumber = maxNumberFromArr(arrayNum);
        maxNum.classList.remove('d-none');
        maxNum.innerHTML = inputArr.value + ' => Max Number Is ' + maxNumber;
        let removeDubli = removeDublicate(arrayNum)
        remNumDub.classList.remove('d-none');
        remNumDub.innerHTML = inputArr.value + ' => Remove Dublicate From Arr Is ' + removeDubli
    } else {
        errMassege.classList.remove('d-none')
        inputArr.classList.add('is-invalid')
        inputArr.classList.remove('is-valid')
        successMassege.classList.add('d-none');
        maxNum.classList.add('d-none');
        remNumDub.classList.add('d-none');


        
    }
})

// task one ===========================================================>
// function to get numbers even from array
function displayEvenNum(arr) {
    let evenArr = arr.filter((ele) => {
        return ele % 2 == 0;
    })
    return evenArr
}
// end Task one ==========================================================

//  Task two ==========================================================
// function to get max number
function maxNumberFromArr(arr) {
    let x = Math.max(...arr)
    return x
}
// end Task two ==========================================================

// task four=============================================================
// function to remove dublicate from arr
function removeDublicate(arr) {
    let removeDublicate =Array.from(new Set(arr)) 
    return removeDublicate
}
// end task four=============================================================


//  Task three ==========================================================
let btnStr = document.querySelector('.resultstr')
let inputStr = document.querySelector('.str')
let errStr = document.querySelector('.errstr')
let seccussStr = document.querySelector('.reverseStr')

btnStr.addEventListener('click', () => {
    let rgx = /^[a-zA-Z]{2,}$/
    if (rgx.test(inputStr.value) == true) {
        errStr.classList.add('d-none')
        inputStr.classList.remove('is-invalid')
        inputStr.classList.add('is-valid')
        let newStringRev = reverseStr(inputStr.value)
        seccussStr.classList.remove('d-none')
        seccussStr.innerHTML=inputStr.value + ' ==> String Is Reversed ===>  '+newStringRev
    } else {
        errStr.classList.remove('d-none')
        seccussStr.classList.add('d-none')
        inputStr.classList.add('is-invalid')
        inputStr.classList.remove('is-valid')

    }
    
})

// function to reverse any string
function reverseStr(str) {
    let newStr = str.split('').reverse().join('')
    return newStr
}
// end Task three ==========================================================

