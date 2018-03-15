var expect = require('chai').expect;
var BT = require('../src/binaryTreeClass');
var Node = require('../src/NodeClass');

describe('Testing framework', function () {
	const testRootNode = {
	  value: 42,
	  left: null,
	  right: null,
	};
	
    it('mocha is working fine', function () {
        expect(true).to.be.true;
    });
	
  describe('Node', function () {	
		it('correctly creates a node', function () {
			nd = new Node(42);
			expect(nd).to.exist;
			expect(nd).to.be.an.instanceOf(Node);
		});
  });
  
  describe('Binary Search Tree', function () {	
		beforeEach(function () {
			bt = new BT(testRootNode);
		});

		afterEach(function () {
			bt = null;
		});
		it('correctly creates a binary tree', function () {
			expect(bt).to.exist;
			expect(bt).to.be.an.instanceOf(BT);
		});
		it('returns 0 when rootNode is null', function () {
			const nullRootNode = null;
			const btWithNullRootNode = new BT(nullRootNode);
			expect(btWithNullRootNode.getMaxValue()).to.equal(0);
		});
		it('returns max value when rootnode is defined', function () {
			let A = new Node(10);
			const B = new Node(13);
			const C = new Node(42);
			A.left = B;
			A.right = C;
			const btWithRootNode = new BT(A);
			expect(btWithRootNode.getMaxValue(A)).to.equal(42);
		});	
		
  });
});