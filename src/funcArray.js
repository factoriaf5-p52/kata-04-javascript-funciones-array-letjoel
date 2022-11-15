/* Encuentra el máximo */

export function maxOfTwoNumbers(num1, num2){
    if (num1 > num2) {
        return num1;
    }else {
        return num2;
    }
}

let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];


export function findLongestWord(wordsArray){
    let arrayOriginal = wordsArray;
    let arrayNum = [];

    arrayOriginal.forEach(word => arrayNum.push(word.length));

    const indice = arrayNum.indexOf(Math.max(...arrayNum));

    return arrayOriginal[indice];

}

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

export function sumArray(numbersArray){
    // return numbersArray.reduce();
}

export function averageNumbers(){}
export function averageWordLength(){}
export function uniquifyArray(){}
export function doesWordExist(){}
export function howManyTimes(){}
export function greatestProduct(){}





