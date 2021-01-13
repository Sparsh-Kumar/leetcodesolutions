

// defining the threesum function
const threeSum = (nums, target = 0) => {
    
    nums.sort ((a, b) => { return a - b; }); // sorting the array
    let result = []; // defining an empty array that will have the results

    for (let i = 0;i < nums.length;i++) {
        
        if (nums [i] > target) { return result; }
        if ((i > 0) && (nums [i] === nums [i - 1])) { continue; } // checking for duplicates while performing loop enumeration

        let a = nums [i];
        let t = target - a;
        let start = i + 1;
        let end = nums.length;
        
        let hash = {}; // initialize the hash table

        while (start < end) { // now find 2 nums b/w nums [start] and nums [end] that gives a sum of t;
            if (hash [t - nums [start]] || hash [t - nums [start]] === 0) {
                result.push ([hash [t - nums [start]], nums [start], nums [i]]);
                while (nums [start] === nums [start + 1]) { start++; } // this is very important to only increment start when we found a match result, otherwise if we include it inside while loop scope outside of if-else block then it will skip all values like in the case of [0, 0, 0]
            } else {
                hash [nums [start]] = nums [start];
            }
            start++;
        }
    }
    return result;
}


// calling the threeSum function
console.log (threeSum ([0, 0, 0]));