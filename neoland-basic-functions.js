//  iteracion 1    buscar el maximo

let numero1 = 10;
let numero2 = 5;

 function sacarNumeroMayor(numero1, numero2) {
 if(numero1 > numero2){
  return numero1;
 } else{
   return numero2;
 }
 }

 // iteracion 2   Buscar la palabra mas larga

 const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(arr) {
    if (arr.length === 0) {
        return null;  
    }

    let longestWord = arr[0];  

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];  
        }
    }

    return longestWord; 
}

// iteracion 3 calcular la suma 

const numbers1 = [1, 2, 3, 5, 45, 37, 58];

function sumAll(arr) {
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }

    return suma;
}
const resultado = sumAll(numbers1);
console.log("La suma de todos los números es:", resultado);
 
//iteracion 4 calcular el promedio

 const numbers2 = [12, 21, 38, 5, 45, 37, 6];
 
 function average(arr){
  if(arr.length === 0){
      return null;
  }

  let suma = 0;

   for(let i = 0; i < arr.length; i++){
    suma +=arr[i];
   }
   return suma / arr.length;
 }

 //iteracion 5 calcular promedio de string

 const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(arr){
  if (arr.length === 0) {
    return null; 
}

let suma = 0;  

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        suma += arr[i];  
    } else if (typeof arr[i] === 'string') {
        suma += arr[i].length; 
    }
    
}

return suma;  

}  


// iteracion 6 valores unicos