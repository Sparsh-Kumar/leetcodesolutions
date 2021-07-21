
/**
 * @param {string} s
 * @return {string}
*/
const longestPalindrome = (s) => {

    let maximumString = '';
    let maximumLength = 0;
    if (!s) {
        return maximumLength;
    }
    for (let i = 0;i < s.length;i++) {
        let reverse = '';
        let notreverse = '';
        for (let j = i;j < s.length;j++) {
            reverse = s [j] + reverse;
            notreverse = notreverse + s [j];
            if (notreverse === reverse) {
                if (reverse.length > maximumLength) {
                    maximumLength = Math.max (maximumLength, reverse.length);
                    maximumString = reverse;
                }
            }
        }
    }
    return maximumString;

};

let main = () => {
    console.log (longestPalindrome ("babad"));
}

main ()