// 27. Remove Element 
// Dificulty: Easy

// const removeElement = function(nums, val) {

//     let i = 0;
//     while(i < nums.length){
//         if(nums[i] === val){
//             nums.splice(i, 1)
//         } else {
//             i++
//         }
//     }

//     return nums.length

// };

// removeElement([[0,1,2,2,3,0,4,2], 2])

// 1. Two Sum 
// Dificulty: Easy

var twoSum = function(nums, target) {
    let num = nums[0]
    let result = 0
    for(let j = 0; j<= nums.length; j++) {
        for(let i = 1; i<= nums.length; i++) {
        result = num + nums[i]
        console.log([nums.indexOf(num), i]);
        if(result === target) return [nums.indexOf(num), i]
        }
        num = nums[j]
    }
};

twoSum([2,5,5,11], 10)