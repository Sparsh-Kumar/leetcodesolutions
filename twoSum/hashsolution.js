/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

    Constraints:
        2 <= nums.length <= 103
        -109 <= nums[i] <= 109
        -109 <= target <= 109
        Only one valid answer exists.

*/



let twoSum = (nums, target) => {
    let hash = {};
    for (let index = 0;index < nums.length;index++) {
        let findNumber = target - nums [index];
        if (hash [findNumber]) {
            return [hash [findNumber] - 1, index]
        } else {
            hash [nums [index]] = index + 1;
        }
    }
}

console.log (twoSum ([2, 7, 11, 15], 9));