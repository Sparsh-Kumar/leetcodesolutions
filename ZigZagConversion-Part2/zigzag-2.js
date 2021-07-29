/*
	
Given a string and number of rows ‘n’. Print the string formed by concatenating n rows when input string is written in row-wise Zig-Zag fashion.

Examples
Input: str = "ABCDEFGH"
       n = 2
Output: "ACEGBDFH"
Explanation: Let us write input string in Zig-Zag fashion
             in 2 rows.
A   C   E   G   
  B   D   F   H
Now concatenate the two rows and ignore spaces 
in every row. We get "ACEGBDFH"

Input: str = "GEEKSFORGEEKS"
       n = 3
Output: GSGSEKFREKEOE
Explanation: Let us write input string in Zig-Zag fashion
             in 3 rows.
G       S       G       S
  E   K   F   R   E   K
    E       O       E
Now concatenate the two rows and ignore spaces 
in every row. We get "GSGSEKFREKEOE"

*/

/*

ALGORITHM

The idea is to traverse the input string. Every character has to go to one of the rows. One by one add all characters to different rows. Below is algorithm: 

1) Create an array of n strings, arr[n]
2) Initialize direction as "down" and row as 0. The 
   direction indicates whether we need to move up or 
   down in rows. 
3) Traverse the input string, do following for every
   character.
   a) Append current character to string of current row.
   b) If row number is n-1, then change direction to 'up'
   c) If row number is 0, then change direction to 'down'
   d) If direction is 'down', do row++.  Else do row--.
4) One by one print all strings of arr[]. 

*/

/* NOTE - THE SOLUTION OF THIS ZIG ZAG AND LEET CODE ZIG ZAG ARE IDENTICAL *





/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
*/


const convert = (s, numRows) => {

    if (!s || !numRows || numRows < 0) {
        return '';
    }

    // making an array of size numRows and initializing all the values to be of empty string
    let resultChunk = '';
    let result = Array.from ({ length: numRows }).fill ('');
    let down = true;
    let row = 0;

    for (let c of s) {
        result [row] = !result [row] && result [row] !== '' ? c: result [row] + c;
        if (row === 0) {
            down = true;
        } else if (row === numRows - 1) {
            down = false;
        }
        row = down ? ++row : --row;
    }


    for (let chunks of result) {
        resultChunk = resultChunk + chunks;
    }

    return resultChunk;
};


const main = () => {
    console.log (convert ('AB', 1));
}

main ();
