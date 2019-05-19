class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
  // If root of node is empty, add value into Node's value
     const newNode = new Node(value);
      if(this.root === null){
         this.root = newNode;
  // We determine LEFT - RIGHT direction of the new node here
  // Left-Right direction depends on value of the previous node     
      } else {
        let currentNode = this.root;
        while(true){
        if(value < currentNode.value){
  // When we go left - check if there is existing left value already
  // condition = true new childNode on the left created
  // Otherwise loop on the right from previous node, make newNode there
            if(!currentNode.left){
              currentNode.left = newNode;
              return this 
            }      
            currentNode = currentNode.left;            
         } else {
  // Condition = value is now higher we are going to head right
  // Check if there are existing nodes - if there is none - create it
  // Otherwise loop on the right from previous node, make newNode there 
               if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            } 
            currentNode = currentNode.right         
         }
        }
      }
    }
     
  // 1ST: In look up the node - if Node does not exist - return false
    // 2: We set the  condition - depends on the value passed in we will 
    // direct the node to go left or go right - if the value mathches 
    // the node that we already have - it will displat the node along 
    // With the left and right node
    lookup(value){
      if(!this.root){
        return false
      }
      let currentNode = this.root;
      while(currentNode) {
        if (value < currentNode.value){
          return currentNode = currentNode.left;
        } else if (value > currentNode.value ){
          return currentNode = currentNode.right
        } else if (currentNode.value === value){
          return currentNode
        }
      }
      return false
    }

// ADDED 19/ 05 /2019   
// Note we are using queue data structure because
// we can go back to each node and discover their child nodes
  BreadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

  while(queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right){
        queue.push(currentNode.right);
      }
    }
    return list
  }
}

  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  JSON.stringify(traverse(tree.root))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  