let re = /   /gi;
let str = "· − · −  · − · · −  · − · −   · −  − ·  · − · −   · −  · − · ·  − − − ·  · · −  · − · −  − · · − · ";
let newstr = str.replace(re, ' 2 2 ');
re = /  /gi;
newstr1 = newstr.replace(re, ' 2 ');
console.log(newstr1);
const words = newstr1.split('2');
console.log(words[13]);