/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * 
 * Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.
 * 
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 * 
 * Example 1:
 * 
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 * Example 2:
 * 
 * Input: numbers = [2,3,4], target = 6
 * Output: [1,3]
 * Example 3:
 * 
 * Input: numbers = [-1,0], target = -1
 * Output: [1,2]
 *  
 * 
 * Constraints:
 * 
 * 2 <= numbers.length <= 3 * 104
 * -1000 <= numbers[i] <= 1000
 * numbers is sorted in increasing order.
 * -1000 <= target <= 1000
 * Only one valid answer exists.
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    const find = (l, r) => {
        const j = Math.floor((l + r) / 2);
        const res = nums[i] + nums[j];
        if (res === target) return j;
        else if (l === r) return null;
        else if (l - r === 1) {
            return find(r, r);
        }
        else if (res < target) return find(j + 1, r);
        else return find(l, j - 1);
    }
    // if (nums.length === 2) return [1, 2];
    for(i; i < nums.length - 1; i++) {
        if (nums[i] + nums[nums.length - 1] < target) continue;
        let j = find(i + 1, nums.length - 1);
        if (j !== null) return [i + 1, j + 1];
    };
    return null;
};

/**
 * не мое решение
 */
// var twoSum = function(numbers, target) {
//     const map = new Map()
//     let i = 0
//     while(true) {
//         const number = numbers[i]
//         if(map.has(target - number)) return [map.get(target - number) + 1, i + 1]
//         map.set(number, i)
//         i++
//     }
// };

/**
 * не мое решение
 */
// var twoSum = function(numbers, target) {
//     const comp = {};
//     for(let i = 0; i < numbers.length; ++i){
//         if(comp[numbers[i]]>=0){
//             return [comp[numbers[i]],i+1];
//         }
//         comp[target - numbers[i]]=i+1;
//     }
// };

console.log(twoSum([-1, 0], -1)); // [1, 2]
console.log(twoSum([2,7,11,15], 9)); // [1, 2]
console.log(twoSum([2,3,4], 6)); // [1, 3]
console.log(twoSum([12,13,23,28,43,44,59,60,61,68,70,86,88,92,124,125,136,168,173,173,180,199,212,221,227,230,277,282,306,314,316,321,325,328,336,337,363,365,368,370,370,371,375,384,387,394,400,404,414,422,422,427,430,435,457,493,506,527,531,538,541,546,568,583,585,587,650,652,677,691,730,737,740,751,755,764,778,783,785,789,794,803,809,815,847,858,863,863,874,887,896,916,920,926,927,930,933,957,981,997],
    542));