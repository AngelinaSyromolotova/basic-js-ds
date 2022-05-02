const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
      this.rootNode = {
          data: null,
          min: null,
          max: null
      };
  }

  root() {
      if (this.rootNode.data == null) {
          return null;
      }

      return this.rootNode;
  }

  add(data) {
      let node = this.rootNode;

      while (node.data !== null) {
          if (data < node.data) {
              if (node.min === null) {
                  node.min = {
                      data: null,
                      min: null,
                      max: null
                  };
              }
              node = node.min;
          } else if (data > node.data) {
              if (node.max === null) {
                  node.max = {
                      data: null,
                      min: null,
                      max: null
                  };
              }
              node = node.max;
          }
          else {
              return; // node exists!
          }
      }

      node.data = data;
  }

  has(data) {
      return (this.find(data) !== null);
  }

  find(data) {
      let result = null;

      const recursiveFind = function(node) {
          if (node.data === data) {
              result = node;
              return;
          }

          if (node.min !== null) {
              recursiveFind(node.min);
          }

          if (node.max !== null) {
              recursiveFind(node.max);
          }
      };

      recursiveFind(this.rootNode);

      return result;
  }

  remove(dataToRemove) {
      const recursiveRemove = function(node, data) {
          if (node.data === data) {
              if (node.min === null && node.max === null) {
                  return null;
              } else if (node.min === null) {
                  return node.max;
              } else if (node.max === null) {
                  return node.min;
              } else {
                  let tmpNode = node.max;
                  while (tmpNode.min !== null) {
                      tmpNode = tmpNode.min;
                  }

                  recursiveRemove(node, tmpNode.data);

                  tmpNode.min = node.min;
                  tmpNode.max = node.max;
                  node = tmpNode;
              }
              return node;
          }

          if (node.min !== null) {
              node.min = recursiveRemove(node.min, data)
          }

          if (node.max !== null) {
              node.max = recursiveRemove(node.max, data);
          }

          return node;
      };

      this.rootNode = recursiveRemove(this.rootNode, dataToRemove);
  }

  min() {
      if (this.rootNode.data == null) {
          return null;
      }

      let node = this.rootNode;

      while (node.min !== null) {
          node = node.min;
      }

      return node.data;
  }

  max() {
      if (this.rootNode.data == null) {
          return null;
      }

      let node = this.rootNode;
      
      while (node.max !== null) {
          node = node.max;
      }

      return node.data;
  }
}

module.exports = {
  BinarySearchTree
};