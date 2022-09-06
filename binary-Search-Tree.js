class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
export class Tree {
  constructor(array = []) {
    this.array = array.sort((a, b) => a - b);
    this.root = this.buildTree(this.array);
  }

  buildTree(array) {
    if (array.length == 0) return null;
    let node = new Node();
    if (array.length > 2) {
      node.value = array[Math.floor(array.length / 2)];
      node.left = this.buildTree(array.slice(0, array.length / 2));
      node.right = this.buildTree(
        array.slice(array.length / 2 + 1, array.length)
      );
    } else if (array.length == 2) {
      node.value = array[1];
      node.left = new Node(array[0]);
    } else {
      node.value = array[0];
    }

    return node;
  }
  insert(value) {
    this.root = this.insertNode(value, this.root);
  }
  insertNode(value, root) {
    if (root == null) {
      root = new Node(value);
      return root;
    }
    if (root.value == value) {
      console.log(`the value ${value} already exist`);
      return root;
    }
    if (value < root.value) root.left = this.insertNode(value, root.left);
    else if (value > root.value)
      root.right = this.insertNode(value, root.right);

    return root;
  }

  delete(value) {
    this.root = this.deleteNode(value, this.root);
  }
  deleteNode(value, node) {
    //case the node is null the value do not exist return root without any changes
    if (node == null) return null;
    // case the node to delete is found
    if (value == node.value) {
      console.log(`found the node of ${node.value}`);
      if (node.left == null && node.right == null) {
        return null;
      }
      if (node.left == null) {
        return node.right;
      }
      if (node.right == null) {
        return node.left;
      }

      //node has two children
      let tempNode = node.right;
      while (tempNode.left != null) {
        tempNode = tempNode.left;
      }
      node.value = tempNode.value;
      node.right = this.deleteNode(tempNode.value, node.right);
      return node;
    }
    // case value of node is inferior to the parametre value
    else if (value < node.value) {
      node.left = this.deleteNode(value, node.left);
      return node;
    } //case vaue of node is superior to the parametre value
    else {
      node.right = this.deleteNode(value, node.right);
      return node;
    }
  }
  find(value) {
    const findNode = (value, node) => {
      if (node == null) return null;
      if (node.value == value) return node;
      if (value < node.value) {
        node = findNode(value, node.left);
        return node;
      }
      if (value > node.value) {
        node = findNode(value, node.right);
        return node;
      }
      if (node.left == null && node.right == null) return null;
      return null;
    };
    let node = findNode(value, this.root);
    return node;
  }
  levelOrder() {
    let result = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      result.push(curr.value);

      if (curr.left != null) {
        queue.push(curr.left);
      }
      if (curr.right != null) {
        queue.push(curr.right);
      }
    }
    return result;
  }
  inorder() {
    const recInorder = (node, array) => {
      if (node == null) {
        return array;
      }
      if (node.left != null) {
        array = recInorder(node.left, array);
      }
      array.push(node.value);
      if (node.right != null) {
        array = recInorder(node.right, array);
      }

      return array;
    };
    let array = [];
    return (array = recInorder(this.root, array));
  }
  preorder() {
    const recPreorder = (array, node) => {
      if (node == null) return array;
      array.push(node.value);
      if (node.left != null) {
        array = recPreorder(array, node.left);
      }
      if (node.right != null) {
        array = recPreorder(array, node.right);
      }
      return array;
    };
    let array = [];
    return (array = recPreorder(array, this.root));
  }
  postorder() {
    const recPostorder = (array, node) => {
      if (node == null) return array;
      if (node.left != null) {
        array = recPostorder(array, node.left);
      }
      if (node.right != null) {
        array = recPostorder(array, node.right);
      }
      array.push(node.value);
      return array;
    };
    let array = [];
    return (array = recPostorder(array, this.root));
  }
  height(node, height = 0) {
    if (node == null) return height;
    if (node.left != null && node.right != null) {
      let leftHeight = this.height(node.left, height + 1);
      let rightHeight = this.height(node.right, height + 1);
      height = rightHeight >= leftHeight ? rightHeight : leftHeight;
    } else if (node.left != null && node.right == null) {
      height = this.height(node.left, height + 1);
    } else if (node.right != null && node.left == null) {
      height = this.height(node.right, height + 1);
    }

    return height;
  }

  depth(node, root = this.root, depth = 0) {
    if (node == null || root == null) return null;
    if (node == root) {
      return depth;
    } else if (node.value < root.value) {
      depth = this.depth(node, root.left, depth + 1);
    } else if (node.value > root.value) {
      depth = this.depth(node, root.right, depth + 1);
    } else {
      return null;
    }
    return depth;
  }
  isBalanced() {
    let node = this.root;
    if (node == null) return 0;
    if (node.left == null && node.right == null) return 0;
    return Math.abs(this.height(node.right) - this.height(node.left)) < 2
      ? true
      : false;
  }
  rebalance() {
    return (this.root = this.buildTree(
      this.levelOrder().sort((a, b) => a - b)
    ));
  }
}
