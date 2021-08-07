

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {

	let result = 0;
	if (!s) {
		return result;
	}

	s = s.trim ();
	let t = '0';

	for (let i = 0;i < s.length;i++) {
		result = result * 10 + (s.charCodeAt (i) - t.charCodeAt (0));
	}

	return result;
    
};


const main = () => {

	console.log (myAtoi ('32526'));

}

main ();