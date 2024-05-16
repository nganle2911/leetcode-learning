/**
 * ??? Given an array nums of integers, return how many of them contain an even number of digits.
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function (nums) {
    var count = 0;
    var numStr;
    var digits;

    for (var i = 0; i < nums.length; i++) {
        numStr = nums[i].toString();
        digits = numStr.length; 

        if(digits % 2 === 0) {
            count++;
        }
    }

    return count;
};

console.log(findNumbers([12,345,2,6,7896]));