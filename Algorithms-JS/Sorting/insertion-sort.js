/* Insertion sort algorithm and runs in O(N²) */
 /* iterate outer loop 0 to n-1 times 
 * for each iteration of outer loop, compare the n items in inner loop  */

 function insertionSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j >=0; j--) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
           // array destruction  [arr[j+1], arr[j]] = [ arr[j], arr[j+1]]
            }
        }
    }
    return arr;
}

console.log(insertionSort([5, 3, 1, 4, 6]));