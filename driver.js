import { Tree } from "./binary-Search-Tree.js";

function generateRandomArray() {
  let generatedArray = [];
  let randomNumber;
  let arrayLength = Math.floor(Math.random() * (10 - 5) + 5);

  for (let i = 0; i < arrayLength; i++) {
    randomNumber = Math.floor(Math.random() * 50);
    while (checkNumberExistInArray(randomNumber, generatedArray)) {
      randomNumber = Math.floor(Math.random() * 50);
    }
    generatedArray.push(randomNumber);
  }
  return generatedArray;
}
const checkNumberExistInArray = (number, array) => {
  if (array.length == 0) return false;
  for (let i = 0; i < array.length; i++) {
    if (number == array[i]) return true;
  }
  return false;
};

const checkTreeBalance = (tree) => {
  tree.isBalanced()
    ? console.log("this tree is balanced!")
    : console.log("this tree is unbalanced, it's recommended to rebalance it");
};

// Driver Script
// Create a tree from an array of generated number
let tree = new Tree(generateRandomArray());
// check the balance of the tree, the result should be the tree is balanced
checkTreeBalance(tree);
// print levelorder,preorder,inorder and postorder of the tree
console.log(`the level order : ${tree.levelOrder()}`);
console.log(`the preorder : ${tree.preorder()}`);
console.log(`the inorder : ${tree.inorder()}`);
console.log(`the postorder : ${tree.postorder()}`);

// unbalance the tree by adding several numbers
for (let i = 0; i < Math.floor(Math.random() * (15 - 10) + 10); i++) {
  tree.insert(Math.floor(Math.random() * (150 - 50) + 50));
}
// check the balance of the tree , the tree will be unbalanced
checkTreeBalance(tree);
// rebalancing the tree
console.log("rebalancing the tree");
tree.rebalance();
// check the balance of the tree, the tree will be balanced once again
checkTreeBalance(tree);
// print the news levelorder,preorder,inorder and postorder of the tree
console.log(`the level order : ${tree.levelOrder()}`);
console.log(`the preorder : ${tree.preorder()}`);
console.log(`the inorder : ${tree.inorder()}`);
console.log(`the postorder : ${tree.postorder()}`);
