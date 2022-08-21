
/**
 * Definition for singly-linked list.
 * function ListNode(data, next) {
 *     this.data = (data===undefined ? 0 : data)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1,list2){
 let currentNode = new Node(0,null);
 let head = currentNode;
  while(list1 && list2){
    if(list1.data <= list2.data){
       currentNode.next = list1;
       list1 = list1.next;
    } else {
        currentNode.next= list2;
        list2 = list2.next;
    }
    currentNode = currentNode.next;
  }
  if(list1){
      currentNode.next = list1
  }
  if(list2){
      currentNode.next = list2;
  }
  return head;
}