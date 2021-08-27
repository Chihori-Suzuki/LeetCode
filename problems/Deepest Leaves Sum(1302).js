
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
 * 1302. Deepest Leaves Sum
 */
 var deepestLeavesSum = function(root) {
    
    let queue = [];
    let deepest = 0;
    let current = 0;
    let ans = 0;    
    
    queue.push(root);
    depth = 0
    nodes = [[root.val]]
    
    while(queue != null) {
        
        root = queue.shift();
        current = root.val;
        
        if(root.left === null && root.right === null ) {
            if (deepest < current) {
                deepest = current;
            } else if (deepest == current) {
                ans += root.val;
            }
        } else {
            if ( root.left !== null ) {
                queue.push(root.left);
            }
            
            if ( root.right !== null ) {
                queue.push(root.right);
            }   
        }    
    }

    return ans;
};
