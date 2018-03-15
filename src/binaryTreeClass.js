// BinaryTree class: constructor and methods
class BinaryTree {

   constructor(rootNode) {
	 if (rootNode == null)
		this.value = null;
	 else
		this.value = rootNode.value;
   }

	getMaxValue(rootNode){
   		if (null == rootNode)
			return 0;

		let currentNodeValue = rootNode.value;
		let leftValue = this.getMaxValue(rootNode.left);
		let rightValue = this.getMaxValue(rootNode.right);
		return Math.max(Math.max(leftValue, rightValue), currentNodeValue);
	}

 }

 module.exports = BinaryTree;
