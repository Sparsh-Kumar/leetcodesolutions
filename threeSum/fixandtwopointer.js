/*
    Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? 
    Find all unique triplets in the array which gives the sum of zero.
    Notice that the solution set must not contain duplicate triplets.
*/

const threeSum = (nums, target = 0) => {
    let result = [];
    nums.sort ((a, b) => { return a - b; })
    for (let i = 0;i < nums.length;i++) {
        if (nums [i] > target) { return result; } // no need to perform operation just return array as the array is sorted
        if ((i > 0) && (nums [i] === nums [i - 1])) { continue; } // this will increment value of 'i' if we get a duplicate
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            if (nums [start] + nums [end] + nums [i] === target) {
                result.push ([nums [i], nums [start], nums [end]]);
                while (nums [start] === nums [start + 1]) { start++; }
                while (nums [end] === nums [end - 1]) { end--; }
                start++;
                end--;
            }
            else if (nums [start] + nums [end] + nums [i] < target) { start++; }
            else if (nums [start] + nums [end] + nums [i] > target) { end--; }
        }
    }
    return result;
}

console.log (threeSum ([-1, 1, 45, 32, 7, 0, 98, -100, 2]))