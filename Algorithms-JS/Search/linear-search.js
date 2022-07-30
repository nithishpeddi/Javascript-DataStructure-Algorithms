// Linear Search , Time Complexity O(N) & space complexity O(N)
/* Linear search is not performant because in order to find the element in the worst 
  case the computer will have to examine every single item in the array. */

 function linearSearch(arr,searchElement){
     if(arr.length>0){
     for(let i=0;i<arr.length;i++){
         if(arr[i] == searchElement){
             return 'elemenet found at index  ' +  i;
         }
     }
    }
     return 'element not found...!';
 }
 
 console.log(linearSearch([2,4,1,55,12,21,18,56,88], 55));