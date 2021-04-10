"use strict"

function longestCommonSubstring(str1, str2) {
if (str1 === str2) return str2;
if (!str2.split('').some(ele => str1.includes(ele))) return '';
let commonSubStr = '';
let storage = [];
const strLength = str2.length;

for (let i = 0; i < strLength; i++) {

    let ind = str1.indexOf(str2[i]);
    if (ind === -1) continue;

    for (let j = i, k = ind; j < strLength; j++, k++) {
        if (str2[j] === str1[k]) commonSubStr += str2[j];
        else{
             storage.push(commonSubStr);
             commonSubStr = '';
            }
    }
    storage.push(commonSubStr);
    commonSubStr = '';
}

//return storage.sort((a, b) => b.length - a.length)[0].length;

return storage.sort((a, b) => b.length - a.length)[0];
}


console.log(longestCommonSubstring("ewelina", "liewenement"));