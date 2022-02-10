let Node = function(x,y,r, ctx, data) {
  // draw function. Responsible for drawing the node
  this.draw = function() {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeText(data, x, y);
  };

  this.getData = function() { return data; };
  this.getX = function() { return x; };
  this.getY = function() { return y; };
  this.getRadius = function() { return r; };
  //formula to calculate the position of the node coordinates
  this.leftCoordinate = function() {
    return {cx: (x - (3*r)), cy: (y + (3*r))}
  };
  // Similar logic, for the right node
  this.rightCoordinate = function() {
    return {cx: (x + (3*r)), cy: (y+(3*r))}
  };
};

// Draws a line from one circle(node) to another circle (node) (CANVAS functionality)
let Line = function() {
  // x,y - starting x,y coordinate
  this.draw = function(x, y, endToXCoordinate, endToYCoordinate, r, ctx) {
    let moveToX = x;
    let moveToY = y + r;
    let lineToX = endToXCoordinate;
    let lineToY = endToYCoordinate - r;
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke();
  };
};

let BinaryTree = function() {
  let c = document.getElementById('my-canvas');
  let ctx = c.getContext('2d');
  let line = new Line();
  this.root = null;

  // Adds element to the tree
  this.addElementToBinaryTree = function(nodeElement) {
    // If root exists, then recursively find the place to add the new node
    if(this.root) {
      console.log('this.root', this.root)
      this.buildNewNodeToTree(this.root, null, null, nodeElement);
    } else {
      // If not, the add the element as a root
      this.root = this.addAndDisplayNode(200, 20, 15, ctx, nodeElement);
      return;
    }
  };

  this.buildNewNodeToTree = function(node, prevNode, coordinateCallback, rootValue) {
    //rootValue - value that was entered by the user in the input
    if(!node) {
      // This is either node.leftCoordinate or node.rightCoordinate
      let xy = coordinateCallback();
      let newNode = this.addAndDisplayNode(xy.cx, xy.cy, 15, ctx, rootValue);
      line.draw(prevNode.getX(), prevNode.getY(), xy.cx, xy.cy, prevNode.getRadius(), ctx)
      return newNode;
    }
    else {
      if(Number(rootValue) < Number(node.getData())) {
        node.left = this.buildNewNodeToTree(node.left, node, node.leftCoordinate, rootValue);
      }
      else {
        node.right = this.buildNewNodeToTree(node.right, node, node.rightCoordinate, rootValue);
      }
      return node;
    }
  };

  // Adds the node to the tree and calls the draw function
  this.addAndDisplayNode = function(x, y, r, ctx, data) {
    let node = new Node(x, y, r, ctx, data);
    node.draw();
    return node;
  };
};

let tree = new BinaryTree();


let addToTree = function() {
  let input = document.getElementById('tree-input');
  let value = input.value
  if(value)
    tree.addElementToBinaryTree(value);
  else
    alert("Wrong input");
};

