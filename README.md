# binary-search-trees
Binary search tree exercises for The Odin Project.

# Testing
I have included my test files with these exercises. All tests were passed prior to this last commit. Tests can be used by installing jest. Note that the test file for the driver is simply a wrapper to ensure the program could easily be run from Node.  

# Instructions
Found at https://www.theodinproject.com/lessons/javascript-binary-search-trees

You’ll build a balanced BST in this assignment. Do not use duplicate values because they make it more complicated and result in trees that are much harder to balance. Therefore, **be sure to always remove duplicate values or check for an existing value before inserting**.

1. **Build a Node class / factory**. It should have an attribute for the data it stores as well as its left and right children.

2. **Build a Tree class / factory** which accepts an array when initialized. The Tree class should have a root attribute which uses the return value of buildTree which you’ll write next.

3. **Write a buildTree function** which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

4. **Write an insert and delete functions** which accepts a value to insert/delete (you’ll have to deal with several cases for delete such as when a node has children or not). If you need additional resources, check out these two articles on inserting and deleting, or this video with several visual examples.

5. **Write a find function** which accepts a value and returns the node with the given value.

6. **Write a levelOrder function** which accepts another function as a parameter. levelOrder should traverse the tree in breadth-first level order and provide each node as the argument to the provided function. This function can be implemented using either iteration or recursion (try implementing both!). The method should return an array of values if no function is given. Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list (as you saw in the video).

7. **Write inorder, preorder, and postorder functions** that accept a function parameter. Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. The functions should return an array of values if no function is given.

8. **Write a height function** which accepts a node and returns its height. Height is defined as the number of edges in longest path from a given node to a leaf node.

9. **Write a depth function** which accepts a node and returns its depth. Depth is defined as the number of edges in path from a given node to the tree’s root node.

10. **Write a isBalanced function** which checks if the tree is balanced. A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.

11. **Write a rebalance function** which rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.

## Tie it all together
1. Write a **simple driver script** that does the following:

2. Create a binary search tree from an array of random numbers. You can create a function if you want that returns an array of random numbers each time you call it.
3. Confirm that the tree is balanced by calling isBalanced
4. Print out all elements in level, pre, post, and in order
5. Unbalance the tree by adding several numbers > 100
6. Confirm that the tree is unbalanced by calling isBalanced
7. Balance the tree by calling rebalance
8. Confirm that the tree is balanced by calling isBalanced
9. Print out all elements in level, pre, post, and in order

