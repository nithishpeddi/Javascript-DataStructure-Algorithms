/* Selection sort algorithm and runs in O(N²) */
 /* iterate outer loop 0 to n-1 times 
 * for each iteration of outer loop, check the inner loop j+1 index and swap it  */

function SelectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min_index = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[min_index]){
                min_index = j;                
            }
            if(min_index !== i){
                let temp = arr[i];
                arr[i] = arr[min_index];
                arr[min_index] = temp; 
            }
        }       
    }
    return arr;
}
console.log(SelectionSort([3, 2, 43, 12, 10]))