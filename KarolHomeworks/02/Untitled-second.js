let morseTable = [" · − "," · − · − "," − · · · "," − · − · "," − · − · · ","  − · · "," · "," · · − · · "," · · − · "," − − · "," · · · · "," · · "," · − − − "," − · − "," · − · · "," · − · · − "," − − "," − · "," − − · − − "," − − − "," − − − · "," · − − · "," − − · − "," · − · "," · · · "," · · · − · · · "," − "," · · − "," · · · − "," · − − "," − · · − "," − · − − "," − − · · "," − − · · − · "," − − · · − "," − − − − − "," · − − − − "," · · − − − "," · · · − − "," · · · · − "," · · · · · "," − · · · · "," − − · · · "," − − − · · "," − − − − · "," · − · − · − "," − − · · − − "," · · − − · · "," · − − − − · "," − · − · − − "," − · · − · "," − · − − · "," − · − − · − "," · − · · · "," − − − · · · "," − · − · − · "," − · · · − "," · − · − · "," − · · · · − "," · · − − · − "," · − · · − · "," · · · − · · − "," · − − · − · "];
let letersTable = [" ","a","ą","b","c","ć","d","e","ę","f","g","h","i","j","k","l","ł","m","n","ń","o","ó","p","q","r","s","ś","t","u","v","w","x","y","z","ź","ż","0","1","2","3","4","5","6","7","8","9",".",",","?","'","!","/","(",")","&",":",";","=","+","-","_","\"","\$","@"];
let i = letersTable.length;


function lettersToMorse(input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        //output += input.charAt(i);
        output += morseTable[findCharIndex(input.charAt(i),letersTable)];
    }      
        return output;
}

function findCharIndex(inputChar, inputTable) {
    let output;
    let inputLowerCase = inputChar.toLowerCase();

    for (let i = 0; i < inputTable.length; i++) {
        if (inputLowerCase === inputTable[i]) {
            output = i;
            break;
        }
        output = 0; //jak nie wiem co to niech będzie spacja
    }
    return output;
}

function morseToLetters(input) {

    function morseStringToArray(input) {
        let temp = input; 
        let indexesTable = [];
        for (let i = 0; i < temp.length-2; i++) {
            if (
                (input.charAt(i) === " ") && 
                (input.charAt(i+1) === " ") &&
                (input.charAt(i+2) === " ")
            ) {
                indexesTable.push(input.substring(0,i));
            }
        }
        return indexesTable;
    }


    function wordsSeparatorIndexes(input) {
        let indexesTable = [];
        let separatorSymbol = " ";
        let spaceMorseSymbol = " ";
        //chce dostać indeksy znaków, które oddzielają wyrazy w morsie 
        for (let i = 0; i < input.length-2; i++) {
            if (
                (input.charAt(i) === spaceMorseSymbol) && 
                (input.charAt(i+1) === separatorSymbol) &&
                (input.charAt(i+2) === spaceMorseSymbol)
            ) {
                indexesTable.push(i+1);
            }
        }
        return indexesTable;
    }

    //return wordsSeparatorIndexes(input);

    const words = input.split('  ');
    words.replace('dog', 'monkey')
    console.log(words[3]);
    //return morseStringToArray(input);
    return words;
}
let indexesTbl = morseToLetters("· − · −  · − · · −  · − · −  · −  − ·  · − · −  · −  · − · ·  − − − ·  · · −  · − · −  − · · − · ");
//let indexesTbl = morseToLetters("Ala ma kota!"); 
console.log(indexesTbl);


// //sprawdzam, czy funkcja wyświetli mi indeks szukanego znaku
// let indeksik = findCharIndex("Ą",letersTable);
// console.log(indeksik);

// // sprawdzam, czy funkcja wypisuje string co jej podam
// let tekscik = lettersToMorse("Ala ma kota!"); 
// console.log(tekscik);

// // wypisze elementy z tablicy
// while (i > 0) {
// --i;
// console.log(morseTable[i]);
// }