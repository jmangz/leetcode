// Given a binary tree, return the preorder traversal of its nodes' values.
//
// Example:
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [1,2,3]
// Follow up: Recursive solution is trivial, could you do it iteratively?

function preorderTraversal(root) {
  const result = [];

  function preorder(node) {
    if (node) {
      result.push(node.val);
      if (node.left) preorder(node.left);
      if (node.right) preorder(node.right);
    }
  }

  preorder(root);

  return result;
}
