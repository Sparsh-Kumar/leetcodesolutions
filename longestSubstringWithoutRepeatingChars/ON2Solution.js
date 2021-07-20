

/**
 * @param {string} s
 * @return {number}
 */

 const lengthOfLongestSubstring = (s) => {
    
    if (!s) {
        return 0;
    }

    let maximum = 0;

    for (let i = 0;i < s.length;i++) {

        let hash = {};
        let count = 0;

        for (let j = i;j < s.length;j++) {
            if ((!hash [s [j]]) && (hash [s[j]]!== 0)) {
                count++;
            } else {
                count = 1;
                hash = {};
            }
            hash [s[j]] = 1;
            maximum = Math.max (maximum, count);
        }
    }

    return maximum;

};


let main = () => {
    console.log (lengthOfLongestSubstring ("asjrgapa"));
}

main ();