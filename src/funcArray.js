/* Encuentra el máximo */

export function maxOfTwoNumbers(num1, num2){
    if (num1 > num2) {
        return num1;
    }else {
        return num2;
    }
}


export function findLongestWord(wordsArray){
    let arrayOriginal = wordsArray;
    let arrayNum = [];

    arrayOriginal.forEach(word => arrayNum.push(word.length));

    const indice = arrayNum.indexOf(Math.max(...arrayNum));

    return arrayOriginal[indice];

}


export function sumArray(numbersArray){
    
    if(numbersArray == undefined || numbersArray == 0) {
        return 0;
    }else {
            let suma = numbersArray.reduce((acc,numero) => acc + numero);
        return suma;
    }



}

export function averageNumbers(numbersArray){

    if(numbersArray == undefined || numbersArray == 0) {
        return undefined;
    }else {
            
        return sumArray(numbersArray) / numbersArray.length;
    }

    

}

let palabras = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
];

export function averageWordLength(array){
    
    let arrayPalabras = [];

    array.forEach(word => arrayPalabras.push(word.length));

    if(array === undefined || array.length == 0) {
        return undefined;
    }else {
        let suma = arrayPalabras.reduce((acc,numero) => acc + numero);
        return suma / array.length;
    }


}
export function uniquifyArray(arr){

    if (arr !== undefined || arr.length != 0) {
        
        let arrayPalabras = [];

        arr.forEach(word => {

            if (!arrayPalabras.includes(word)) {
                arrayPalabras.push(word);
            }
        
        });

        if (arr === undefined || arr.length == 0 ) {
            return undefined;
        }else{
            return arrayPalabras;
        }


    }else {
        return undefined;
    }
}

export function doesWordExist(arr, word){
    
    if (arr !== undefined || arr.length != 0) {
        
        let existe;
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === word){
                existe = true;
            }
        }

        if (existe === undefined ) {
            return false;
        }else{
            return true
        }


    }else {
        return undefined;
    }


}


export function howManyTimes(arr, word) {
    if (arr.length === 0 ) {
        
        return undefined; //la descripción del test está mal, espera undefined, no false

    }else if (arr !== undefined) {
        let cuenta = 0;
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === word){
                cuenta++;
            }
        }

        if (cuenta == 0 ) {
            return 0;
        }else{
            return cuenta;
        }
    }
}

export function greatestProduct(matriz){

    let nuevoArray = [];

    let matrizOpDerechaArriba = 0;
    let matrizOpDerecha = 0;
    let matrizOpDiagonalAbajo = 0;
    let matrizOpAbajo = 0;

    for (let i = 0; i < matriz.length; i++) { 
        for (let j = 0; j < matriz[i].length; j++) { 
        
        }
    }


}





