class BST{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value){
    if(value <= this.value){
      if(!this.left) this.left = new BST(value);
      else this.left.insert(value);
    }else if(value > this.value){
      if(!this.right) this.right = new BST(value);
      else  this.right.insert(value);
    }
  }
  contains(value){
    if(value === this.value) return true;
    else if(value < this.value){
      if(!this.left) return false;
      else return this.left.contains(value)
    }
    else if(value>this.value){
      if(!this.right) return false;
      else return this.right.contains(value)
    }
  }
  depthFirstTraversal(iteratorFunc, order){
    if(order === 'pre-order') iteratorFunc(this.value)
    if(this.left) this.left.depthFirstTraversal(iteratorFunc, order)
    if(order === 'in-order')iteratorFunc(this.value)
    if(this.right) this.right.depthFirstTraversal(iteratorFunc, order)
    if(order === "post-order") iteratorFunc(this.value)
  }
  breadthFirstTraversal(iteratorFunc){
    const queue = [this];
    while (queue.length) {
        let treeNode = queue.shift();
        iteratorFunc(treeNode.value);
        if(treeNode.left) queue.push(treeNode.left)
        if(treeNode.right) queue.push(treeNode.right)
    }
  }
  getMaxVal(){
    if(!this.right) return this.value
    return this.right.getMaxVal()
  }
  getMinVal(){
    if(!this.left) return this.value
    return this.left.getMinVal()
  }
}
const bst = new BST(50);
bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(59)
bst.insert(20)
bst.insert(45)
bst.insert(35)
bst.insert(85)
bst.insert(105)
bst.insert(10)

bst.depthFirstTraversal(func, 'post-order')
function func(value){
  console.log(value)
}

bst.breadthFirstTraversal(breadth)
function breadth(node) {
  console.log(node);
  
}
console.log(bst.getMaxVal());
console.log(bst.getMinVal());
 
