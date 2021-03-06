let participants = 9; 
let partyTable = [];
let i = 0;

// ----- wpisuje w tablice numery ludzi ----
while (i < participants){
    partyTable[i] = ++i;
}
i = 0;

// for (let i=partyTable.length;i>1;){
//     partyTable = partyOneRund(partyTable);
//     i = partyTable.length;
// }
// console.log(partyTable[0]);

while(partyTable.length>1){
    partyTable = partyOneRund(partyTable);
}
console.log(partyTable[0]);


// ----- realizuje wycinanie kolegi obok -----
// po analizie sytuacji to wychodzi na to, że jeśli ilość
// uczesników jest parzysta to przeżyją sami nieparzyści
// jeśli jest nieparzysta, to też przeżyją nieparzyści, 
// ale zginie również pierwszy. 
// Zatem z tablicy, którą mam: 
// jak parzyści -> biorę podtablicę nieparzystych
// jak nieparzyści -> wycinam dwóch pierwszych i biorę tablicę nieparzystych

function partyOneRund(array) {
    let afterParty = []
    if ((partyTable.length % 2) != 0) {
        //console.log("nieparzyści");
        let temp = array.slice(2, array.length);
        afterParty = subOddTable(temp);

    } else {
        //console.log("przyści");
        afterParty = subOddTable(array);
    };
    return afterParty;
};

function subOddTable(array) {
    temp = [];
    let i=0;
    let j=0;

    while (j<array.length){
        temp[i] = array[j]
        i+=1;
        j+=2;
    };
    return temp;
  }

//pokarz tablice z wszystkimi uczestnikami
//console.log(partyTable);
//sprawdz czy dobrze wybiera nieparzyste
//console.log(subOddTable(partyTable));
//pokarz co się będzie działo po jednej rundzie przyjęcia
//console.log(partyOneRund(partyTable));