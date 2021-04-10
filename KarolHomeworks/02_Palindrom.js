// 2. Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’,’sedes’.
'use strict' //`use strict` -> takie użycie powoduje, że nie zadziała

// //-----TEST USE STRICT'a------
// function jakasTam(){
//     pikus = 5;
//     return pikus
// }

// jakasTam();
// console.log(pikus);

// -----ZAŁOŻENIA------
// * shortest  palindrome --> 2-letters
// * it possible to be few same lenght


//
// text.slice(0, -1)  --> usuń ostatni znak w stringu
// text.slice(1)  --> usuń pierwszy znak w stringu
// text.includes("world") --> sprawdź czy string zawiera substring
//



let palindrome = function(givenString){
   
    if (givenString.length < 2){
        return "there's no palindrome"
    }

    let input = givenString;
    let tupni = input.split("").reverse().join(""); //make reverse of input
    let palindromeSet = [];
    let palindromeSet1 = [];

    for (let i=0; i<input.length-1; i++){
        let tempIn =  input.slice(i);
        palindromeSet.push(tempIn);
        for (let j=0; j<=tempIn.length; j++){
            palindromeSet1.push(tempIn);
            tempIn = tempIn.slice(0, -1)
        }
    }

  

    //return input + " " + tupni + " " + palindromeSet1;
    return palindromeSet + "|" + palindromeSet1;
}

console.log(palindrome("pikar"));

