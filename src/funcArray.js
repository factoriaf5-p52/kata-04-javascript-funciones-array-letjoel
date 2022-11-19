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

export function greatestProduct(matrix){

    //Sacamos filas
    let filas = 0;
    matrix.forEach( fila => filas++);

    //Sacamos columnas
    let columnas = 0;
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            columnas++;
        }  
    }

    //Creamos arrays vacios para rellenarlos luego

    let matrixDiagonalArriba = [];
    let matrixDerecha = [];
    let matrixDiagonalAbajo = [];
    let matrixAbajo = [];

    // let matrixDiagonalArriba = new Array(filas);
    // for (let i = 0; i < matrixDiagonalArriba.length; i++) {
    //   matrixDiagonalArriba[i] = new Array(columnas);
    // };

    // let matrixDerecha = new Array(filas);
    // for (let i = 0; i < matrixDerecha.length; i++) {
    //   matrixDerecha[i] = new Array(columnas);
    // };

    // let matrixDiagonalAbajo = new Array(filas);
    // for (let i = 0; i < matrixDiagonalAbajo.length; i++) {
    //   matrixDiagonalAbajo[i] = new Array(columnas);
    // };
    // let matrixAbajo = new Array(filas);
    // for (let i = 0; i < matrixAbajo.length; i++) {
    //   matrixAbajo[i] = new Array(columnas);
    // };

    //Recorremos matriz original
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            //Diagonal Arriba
            if (i >= 3 && j <= (columnas - 4)) {
                let value = matrix[i][j];
                let value2 = matrix[i-1][j+1];
                let value3 = matrix[i-2][j+2];
                let value4 = matrix[i-3][j+3];
                let diagonalArribaProduct = value * value2 * value3 * value4;
                matrixDiagonalArriba.push(diagonalArribaProduct);
                
            }else {
                let val = matrix[i][j];
                matrixDiagonalArriba.push(val); 
            }

            

            //Derecha
            if (j <= (columnas - 4)) {
                let value = matrix[i][j];
                let value2 = matrix[i][j+1];
                let value3 = matrix[i][j+2];
                let value4 = matrix[i][j+3];

                let derechaProduct = value * value2 * value3 * value4;
                matrixDerecha.push(derechaProduct);
                
            }else {
                let val = matrix[i][j];
                matrixDerecha.push(val); 
            }

            //Diagonal abajo
            if (i <= (filas - 4) && j <= (columnas - 4)) {
                let value = matrix[i][j];
                let value2 = matrix[i+1][j+1];
                let value3 = matrix[i+2][j+2];
                let value4 = matrix[i+3][j+3];

                let diagonalAbajoProduct = value * value2 * value3 * value4;
                matrixDiagonalAbajo.push(diagonalAbajoProduct);
                
            }else {
                let val = matrix[i][j];
                matrixDiagonalAbajo.push(val); 
            }

            //Abajo
            if (i <= (filas - 4)) {
                let value = matrix[i][j];
                let value2 = matrix[i+1][j];
                let value3 = matrix[i+2][j];
                let value4 = matrix[i+3][j];

                let abajoProduct = value * value2 * value3 * value4;
                matrixAbajo.push(abajoProduct);
                
            }else {
                let val = matrix[i][j];
                matrixAbajo.push(val); 
            }



        }  
    }

    console.log(matrixDiagonalArriba);

    let arrayFinal = [];
    arrayFinal.push(Math.max(...matrixDiagonalArriba));
    arrayFinal.push(Math.max(...matrixDerecha));
    arrayFinal.push(Math.max(...matrixDiagonalAbajo));
    arrayFinal.push(Math.max(...matrixAbajo));
    console.log(arrayFinal);
    console.log(Math.max(...arrayFinal));
    return Math.max(...arrayFinal);


}





