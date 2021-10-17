


/**
 * Given an unsorted array of integers, sort the array into a wave like array.
 * An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..
 */


const sortInWave = (arr) => {
    
    if (!arr || !arr.length) {
        return -1;
    }

    for (let i = 0;i < arr.length;i = i + 2) {

        if ((i > 0) && (arr [i] < arr [i - 1])) {
            let temp = arr [i];
            arr [i] = arr [i - 1];
            arr [i - 1] = temp;
        }

        if ((i < arr.length - 1) && (arr [i] < arr [i + 1])) {
            let temp = arr [i];
            arr [i] = arr [i + 1];
            arr [i + 1] = temp; 
        }
    }

    return arr;

}

const main = () => {

    console.log (sortInWave ([10, 90, 49, 2, 1, 5, 23]));
 
}

main ();
