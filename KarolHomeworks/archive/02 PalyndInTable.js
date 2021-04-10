    "use strict"

    // A utility function to print
    // a substring str[low..high]

    function printSubStr(str,low,high) {
        console.log(str.substring(low, high + 1));
    }
 
    // This function prints the longest palindrome substring of str[]. It also returns the length of the longest palindrome
    function longestPalSubstr(str) {
        // get length of input string
        let n = str.length;
        // table[i][j] will be false if substring str[i..j] is not palindrome. Else table[i][j] will be true
        
        //let table = [n][n];
        //let table = [[]];

        
        // All substrings of length 1 are palindromes
        let maxLength = 1;
        for (let i = 0; i < n; ++i){
            table[i][i] = true;
        }

        // check for sub-string of length 2.
        let start = 0;
        for (let i = 0; i < n - 1; ++i) {
            if (str.charAt(i) == str.charAt(i + 1)) {
                table[i][i + 1] = true;
                start = i;
                maxLength = 2;
            }
        }
 
        // Check for lengths greater than 2.
        // k is length of substring
        for (let k = 3; k <= n; ++k) {
 
            // Fix the starting index
            for (let i = 0; i < n - k + 1; ++i) {
                // Get the ending index of substring from starting index i and length k
                let j = i + k - 1;
 
                // checking for sub-string from ith index to jth index iff str.charAt(i+1) to str.charAt(j-1) is a palindrome
                if (table[i + 1][j - 1]
                    && str.charAt(i) === str.charAt(j)) {
                    table[i][j] = true;
 
                    if (k > maxLength) {
                        start = i;
                        maxLength = k;
                    }
                }
            }
        }
        //console.log("Longest palindrome substring is; ");
        //printSubStr(str, start, start + maxLength - 1);
 
        // return length of LPS
        return maxLength;
    }
 
    // Driver program to test above functions
 
        console.log("Length is: " + longestPalSubstr("alololoks"));
    