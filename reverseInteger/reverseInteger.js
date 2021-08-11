

const reverseInteger = (number = undefined) => {
    let rev = 0;
    if (!number) {
        return rev;
    } else {
        while (number !== 0) {
            let rem = number % 10;
            rev = rev * 10 + rem;
            number = Math.floor (number / 10);
        }
    }
    return rev;
}

const main = () => {
    console.log (reverseInteger (35897));
}

main ();