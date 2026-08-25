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

// var twoSum = function(nums, target) {
//     let num = nums[0]
//     let result = 0
//     for(let j = 0; j<= nums.length; j++) {
//         for(let i = 1; i<= nums.length; i++) {
//         result = num + nums[i]
//         console.log([nums.indexOf(num), i]);
//         if(result === target) return [nums.indexOf(num), i]
//         }
//         num = nums[j]
//     }
// };

// twoSum([2,5,5,11], 10)

// 9. Palindrome Number
// Dificulty: Easy

// var isPalindrome = function(x) {
    // const str = String(x)

    // if  (str.length <= 1) return true
    // if (str[0] !== str[str.length - 1]) return false

    // return isPalindrome(str.slice(1, -1))

    // return x.toString() === x.toString().split("").reverse().join("");
// };

// console.log(isPalindrome(121))




// 83. Remove Duplicates from Sorted List
// Dificulty: Easy

// var deleteDuplicates = function(head) {
//   let current = head;

//   while (current && current.next) {
//       if (current.val === current.next.val) {
//           current.next = current.next.next;
//       } else {
//           current = current.next;
//       }
//   }

//   return head;
// }

// deleteDuplicates(testCase)





// 58. Length of Last Word
// Dificulty: Easy

// var lengthOfLastWord = function(s) {
//   let arr = s.trim().split(" ")
//   return arr[arr.length - 1].length
// };

// lengthOfLastWord("luffy is still joyboy")




// 66. Plus One
// Dificulty: Easy

// var plusOne = function(digits) {
//   let number = BigInt(digits.join("")) + 1n;
//     return number.toString().split("").map(Number)
// };

// plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])


// 88. Merge Sorted Array
//  Dificult: Easy
// let arr = [1,2,3,0,0,0]
// let m = 3
// let nums2 = [2,5,6]
// let n = 3   

// var merge = function(nums1, m, nums2, n) {
// nums1.splice(0, nums1.length, ...nums1.slice(0, m).concat(nums2).sort((a, b) => a - b))
// };

// merge(arr, m, nums2, n)

// console.log(arr)



// 100. Same Tree
// Dificulty: Easy

// var isSameTree = function(p, q) {
//     return JSON.stringify(p) === JSON.stringify(q); 
// };

// console.log(isSameTree([1,2,1], [1,1,2]))



// 3. Longest Substring Without Repeating Characters
//  Dificult: Medium
// var lengthOfLongestSubstring = function(s) {
//     let result = []
//     for(i = 0; i <= s.length; i++) {
//         if(!result.includes(s[i])){
//             result.push(s[i])
//         }
//     }
//     return result
// };

// console.log(lengthOfLongestSubstring("abcabcbb"))


// 27. Remove Element
// var removeElement = function(nums, val) {
//   let k = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// };

// console.log(removeElement([3,2,2,3], 3))



// 2248. Intersection of Multiple Arrays
//  Dificult: Easy
// var intersection = function(nums) {
//     let result = nums[0]
//     nums.forEach(el => {
//         for (let i = result.length - 1; i >= 0; i--) {
//             if (!el.includes(result[i])) {
//                 result.splice(i, 1);
//             }
//         }
//    });

//     return result.sort((a,b) => a-b)
// };

// console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))



// 26. Remove Duplicates from Sorted Array
//  Dificult: Easy
// var removeDuplicates = function(nums) {
//     let k = 1

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[k] = nums[i]
//             k++
//         }
//     }

//     return k
// };

// console.log(removeDuplicates([1,1,2]))




// 217. Contains Duplicate
//  Dificult: Easy
// var containsDuplicate = function(nums) {
//     let result = nums.length === new Set([...nums]).size
//     return !result
// };


// console.log(containsDuplicate([[2,14,18,22]]))



// 88. Merge Sorted Array
//  Dificult: Easy

let arr = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3  
var merge = function(nums1, m, nums2, n) {
   nums1.splice(m, n, ...nums2)
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums1.length - 1 - i; j++) {
            if (nums1[j] > nums1[j + 1]) {
                [nums1[j], nums1[j + 1]] = [nums1[j + 1], nums1[j]]
            }
        }
    }
};

merge(arr,m,nums2,n)
console.log(arr)