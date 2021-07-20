
/**
 * @param {string} s
 * @return {number}
 */

// this is the linear time solution

const lengthOfLongestSubstring = (s) => {
    
    if (!s) {
        return 0;
    }

    let hash = {};
    let maximum = 0;
    let end = 0;

    for (let i = 0; i < s.length;i++) {
        if ((!hash [s [i]]) && (hash [s[i]] !== 0)) {
            hash [s[i]] = i;
            maximum = Math.max (maximum, i - end + 1);
        } else {
            end = Math.max (end, hash [s [i]] + 1);
            hash [s[i]] = i;
            maximum = Math.max (maximum, i - end + 1);
        }
    }

    return maximum;

};

const main = () => {
    console.log (lengthOfLongestSubstring ("pwwkew"));
}

main ();