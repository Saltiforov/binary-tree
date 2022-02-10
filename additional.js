class BinaryTree {
  constructor(value, left= null, right= null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  addNode(node) {
    if (node.value > this.value) {
      if (this.right === null) {
        this.right = node
      }else {
        this.right.addNode(node)
      }
    } else {
      if (this.left === null) {
        this.left = node
      }else {
        this.left.addNode(node)
      }
    }
  }
}

let tree = new BinaryTree(1, new BinaryTree(0), new BinaryTree(5))
tree.addNode(new BinaryTree(4, new BinaryTree(1), new BinaryTree(6)))
console.log(tree)

module.exports = new BinaryTree(1, new BinaryTree(0), new BinaryTree(5))
