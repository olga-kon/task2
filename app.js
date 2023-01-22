let result = "";
let userData = "";
let nums = [];
let resultEven = "";
let range = "";

function final() {
    
    let num1 = Number(prompt("Introduce el primer número"));
    let num2 = Number(prompt("Introduce el segundo número"));
    nums.push(num1);
    nums.push(num2);

/*validation + sum*/
function isValid() {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 1 || nums[i] > 50 || (Number.isInteger(nums[i]) === false)) {
            alert("Los valores introducidos tienen que ser números enteros positivos entre el 1 al 50!");
        } else {
            result = num1 + num2; 
        }
        
      }
}

/*odd or even*/
function isEven(num) {
    return num % 2 === 0;  
      }

function printEven(num1, num2) {
    let even1, even2;
    
    
    if(isEven(num1) && isEven(num2)) {
        resultEven += "Ambos son pares";
    } else if (!isEven(num1) && !isEven(num2)) {
        resultEven += "Ambos no son pares";

    } else {
    even1 = (isEven(num1) ? `${num1} es par` : `${num1} es inpar`);
    even2 = (isEven(num2) ? `${num2} es par` : `${num2} es inpar`);
    
    if(resultEven === "") {
        resultEven += `${even1}, ${even2}`;
    }
}

}

/*prime or not*/
let resultPrime = "";

function isPrime(num) {
    return ((num > 1 && num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) || (num === 2 || num === 3 || num === 5))
} 

function printPrime(num1, num2) {
    let prime1, prime2;
  if (isPrime(num1) && isPrime(num2)) {
    resultPrime += "Ambos son primos";
  } else if (!isPrime(num1) && !isPrime(num2)) {
      resultPrime += "Ambos no son primos";
  } else {
    prime1 = (isPrime(num1) ? `${num1} es primo` : `${num1} no es primo`);
    prime2 = (isPrime(num2) ? `${num2} es primo` : `${num2} no es primo`);

    if(resultPrime === "") {
        resultPrime += `${prime1}, ${prime2}`;
  }
}
}
/*print the range*/
let resultRange = "";
function whatRange(num1, num2) {
   
    if (num1 < num2) {
      for (let i = num1 + 1; i < num2; i++) {
        if (i % 2 === 0) { continue; } 
        range = i + " ";
        resultRange += `el rango es ${range}`;
    }}
      else if (num1 > num2) {
        for (let i = num1 -1; i > num2; i--) {
            if (i % 2 !== 0) { continue; } 
            range += i + " ";
            resultRange += `el rango es ${range}`;
    }} else if (num1 === num2) {
      range = num1;
      resultRange += `el rango es ${range}`;
    } else if ((num1 + 1) === num2 || num1 === (num2 + 1)) {
        resultRange = "";
    }
    return resultRange;
    }

whatRange(num1, num2);
isValid(num1, num2);
printEven(num1, num2);
printPrime(num1, num2);
alert(`la suma es ${result}\n ${resultEven}\n ${resultPrime}\n ${resultRange}`);
}

final();
