/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * interface ImmutableListNode {
 *     public void printValue(); // print the value of this node.
 *     public ImmutableListNode getNext(); // return the next node.
 * };
 */

class Solution {
    public void printLinkedListInReverse(ImmutableListNode head) {
            
        Deque<ImmutableListNode> deque = new ArrayDeque<>();
        deque.push(head);
        while(head.getNext() != null) {
            deque.push(head.getNext());
            head = head.getNext();
        }
        
        while(deque.size() > 0) {
            deque.pop().printValue();
        }
    }
}