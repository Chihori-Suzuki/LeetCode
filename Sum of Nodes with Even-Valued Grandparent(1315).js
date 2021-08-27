
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 1315. Sum of Nodes with Even-Valued Grandparent
 */
 var sumEvenGrandparent = function(root) {
    let result = 0;
    if(!root) return result;
    let queue = [[root, null, null]];
    while(queue.length) {
        let [node, parent, grandparent] = queue.shift();
        if(grandparent && grandparent % 2 === 0) {
            result += node.val
        }
        if(node.left) queue.push([node.left, node.val, parent]);
        if(node.right) queue.push([node.right, node.val, parent]);
    }
    return result;
};
