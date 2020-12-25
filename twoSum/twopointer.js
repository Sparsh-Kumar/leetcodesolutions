
// this is another approach but we need to sort the array first
// thus for only 2 sum hash solution is the best solution given in bestsolution.js

const twoSum = (nums, target) => {
    nums.sort ((a, b) => { return a -b; }) // first sort the array
    let result = [];
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let a = nums [start]
        let b = nums [end]
        if (a + b === target) {
            return [a, b];
        } else if (a + b < target) {
            start++;
        } else if (a + b > target) {
            end--
        }
    }
    return result;
}

console.log (twoSum ([2, 3, 123, 234, 15, 12, 3, 11], 27))