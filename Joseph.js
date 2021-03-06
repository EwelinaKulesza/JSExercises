let participants = 9; 
let partyTable = [];
let i = 0;

// ----- wpisuje w tablice numery ludzi ----
while (i < participants){
    partyTable[i] = ++i;
}
// ----- realizuje wycinanie kolegi obok -----
// po analizie sytuacji to wychodzi na to, że jeśli ilość
// uczesników jest parzysta to przeżyją sami nieparzyści
// jeśli jest nieparzysta, to też przeżyją nieparzyści, 
// ale zginie również pierwszy. 
// Zatem z tablicy, którą mam: 
// jak parzyści -> biorę podtablicę nieparzystych
// jak nieparzyści -> wycinam dwóch pierwszych i biorę tablicę nieparzystych
i = 0;
if ((partyTable.length % 2) != 0) {
    console.log("nieparzyści");

} else {
    console.log("przyści");

}


function subOddTable(array) {
    temp = [];
    let i=0;
    let j=0;

    while (j<array.length){
        temp[i] = array[j]
        i+=1;
        j+=2;
    }
    // for(let i = 0; i<=(array.length-2); i+=2){
    //     //if (i>array.length-1) {i+=3;continue;}
    //     temp[j] = array[i];
    //     j++;
    // }
    return temp;
  }


//console.log(partyTable);
console.log(subOddTable(partyTable));