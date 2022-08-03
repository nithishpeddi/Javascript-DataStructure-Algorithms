/*  Like insertion sort, bubble sort is a comparison algorithm and runs in O(n²) */
 /* iterate outer loop 0 to n-1 times 
 * iterate inner loop 0 to n-1 - i times */

 function bubbleSort(arr) {
     for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < arr.length-1-i; j++) {
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
 
 console.log(bubbleSort([5, 3, 1, 4, 6]));