const BinaryTree = require('./binaryTreeClass');
const Node = require('./nodeClass');
// Creating our binary tree
		let A = new Node(10);
		let B = new Node(13);
		let C = new Node(69);
		let D = new Node(25);
		let E = new Node(80);
		let F = new Node(75);
		let G = new Node(45);
		let H = new Node(51);
		A.left = B;
		A.right = C;
		B.left = D;
		B.right = E;
		C.left = F;
		C.right = G;
		E.left = H;
		let binaryTree = new BinaryTree(A);

console.log(`max value is: ${binaryTree.getMaxValue(A)}`);
