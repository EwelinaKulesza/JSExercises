"use strict"

const multiplyMatrices = (a, b) => {
    if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
       throw new Error('arguments should be in 2-dimensional array format');
    }
    let x = a.length,
    z = a[0].length,
    y = b[0].length;
    if (b.length !== z) {
       // XxZ & ZxY => XxY
       throw new Error('number of columns in the first matrix should be the same as the number of rows in the second');
    }
    let productRow = Array.apply(null, new
    Array(y)).map(Number.prototype.valueOf, 0);
    let product = new Array(x);
    for (let p = 0; p < x; p++) {
       product[p] = productRow.slice();
    }
    for (let i = 0; i < x; i++) {
       for (let j = 0; j < y; j++) {
          for (let k = 0; k < z; k++) {
             product[i][j] += a[i][k] * b[k][j];
          }
       }
    }
    return product;
 }
 // 3 x 4
 let a = [
    [0, 2, 3, 0],
    [4, 5, 0, 1],
    [4, 2, 3, 0],
 ];
 // 4 x 6
 let b = [
    [0, 4, 4, 3, 4, 1],
    [2, 0, 2, 4, 3, 2],
    [3, 5, 3, 1, 6, 2],
    [0, 1, 0, 2, 3, 1]
 ];

 let result = multiplyMatrices(a, b)
 // should result in a 3 x 6 matrix
 console.log(result[0] + "\n" + result[1] + "\n" + result[2]);
