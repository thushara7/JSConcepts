console.log("Hi Thushara");

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor(value) {
    this.head = new Node(value);
    this.size = 1;
  }

  size = () => this.size;
  insert = value => {
    this.size = this.size + 1;

    const searchTree = node => {
      if (value < node.data) {
        if (!node.left) {
          node.left = new Node(value);
        } else {
          searchTree(node.left);
        }
      } else if (value > node.data) {
        if (!node.right) {
          node.right = new Node(value);
        } else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.head.data);
  };
}
const head = new Node(12);
const myTree = new Tree(head);
myTree.insert(9);
console.log(myTree);
