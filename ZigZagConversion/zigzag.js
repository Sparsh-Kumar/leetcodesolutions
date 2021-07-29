


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