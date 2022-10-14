const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

let node
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor()
  {
      this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    var addNode = new Node(data);
    if(this.rootNode === null){
      this.rootNode = addNode;
    }
    else{
      this.insertNode(this.rootNode, addNode);
    }
  }

  insertNode(node, addNode) {
    if (addNode.data < node.data) {
        if (node.left === null) {
          node.left = addNode;
        } else {
          this.insertNode(node.left, addNode);
        }
    } else {
        if (node.right === null) {
          node.right = addNode;
        } else {
          this.insertNode(node.right, addNode);
        }
    }
  }

  has(data) {
    node = this.rootNode
    while(true){
    if(node === null)
      return false;
    else if(data < node.data){
      node = node.left;
    }
    else if(data > node.data){
      node = node.right;
    }
    else
      return true;
    }
  }

  find(data) {
    node = this.rootNode
    while(true){
    if(node === null)
      return null;
    else if(data < node.data){
      node = node.left;
    }
    else if(data > node.data){
      node = node.right;
    }
    else
      return node;
    }
  }

  remove(data)
  {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(removeNode, date)
  {    
    if(removeNode === null)
      return null;

    else if(date < removeNode.data)
    {
        removeNode.left = this.removeNode(removeNode.left, date);
        return removeNode;
    }

    else if(date > removeNode.data)
    {
      removeNode.right = this.removeNode(removeNode.right, date);
      return removeNode;
    }
    else
    {
      if(removeNode.left === null && removeNode.right === null)
      {
          removeNode = null;
          return removeNode;
      }

      if(removeNode.left === null)
      {
          removeNode = removeNode.right;
          return removeNode;
      }
        
      else if(removeNode.right === null)
      {
          removeNode = node.left;
          return removeNode;
      }
      var temp = this.MinNode(removeNode.right);
      removeNode.data = temp.data;
      removeNode.right = this.removeNode(removeNode.right, temp.data);
      return removeNode;
    }
  };

  MinNode(node)
  {
    if(node.left === null)
      return node;
    else
      return this.MinNode(node.left);
  };

  min() {
    node = this.rootNode
    while(true){
      if(node.left === null)
        return node.data;
      else
        node = node.left
    }
  }

  max() {
    node = this.rootNode
    while(true){
      if(node.right === null)
        return node.data;
      else
        node = node.right
    }
  }
}

module.exports = {
  BinarySearchTree
};