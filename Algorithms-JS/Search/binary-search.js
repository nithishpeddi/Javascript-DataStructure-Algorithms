/**
 * Binary search is more efficient than linear search. 
 * Binary Search only works with sorted array.
 * A binary search works by finding the middle element of a sorted array and comparing it to your target element. * 
 * Time Complexity O(logn) and Space Complexity O(N)
 */
function binarySearch(arr, searchElement) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === searchElement) {
            return 'Element found at ' + mid;
        }
        if (searchElement > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return 'Element not found..!'
}

console.log(binarySearch([3, 5, 6, 12, 14, 18, 21, 25, 30, 33, 39], 30));

