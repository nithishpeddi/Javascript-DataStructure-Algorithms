
/** Time complexity O(N*Log(N)) && Space Complexity O(N) */

function mergeSort(unSortedArr){
  /** consider the best case */
   if(unSortedArr.length <=1) return unSortedArr;

   let mid = Math.floor(unSortedArr.length/2);
   let left = unSortedArr.slice(0, mid);
   let right = unSortedArr.slice(mid);
   /** recursively divide the array in to small parts */
   return merge (
       mergeSort(left),
       mergeSort(right)
   )
}
function merge(left, right){
    let result = [], leftIndex = 0, rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    /* result array is sorted but remaining elements are pused back */
    return result
    .concat(left.slice(leftIndex)
    .concat(right.slice(rightIndex))
    )
}
console.log(mergeSort([10, -1, 2, 5, 0, 6, 4, -5]))

/** line 12 will recursively divide the array elements
 *  mergeSort(left) will recursive divide left array and pass it to
 *  the merge function
 * [10, -1, 2, 5]             
 * [10, -1] [2, 5]               
 * [10]  [-1]  [2] [5]           
 */
/** line 12 will recursively divide the array elements
 *  mergeSort(right) will recursive divide left array and pass it to
 *  the merge function
 *  [0, 6, 4, -5]
 *  [0, 6]  [4, -5]
 *  [0]  [6]  [4]  [-5]
 */