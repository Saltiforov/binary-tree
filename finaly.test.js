const ExportedBinaryTree = require('./additional.js');

class BinaryTree {
  constructor(value, left= null, right= null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
describe('BinaryTree testing...', () => {
  test('Check initial BinaryTree', () => {
    expect(ExportedBinaryTree.value).toEqual(1)
    expect(ExportedBinaryTree.left).toEqual(new BinaryTree(0))
    expect(ExportedBinaryTree.right).toEqual(new BinaryTree(5))
    console.log('ExportedBinaryTree', ExportedBinaryTree)
  })

  test('Checking the task condition', () => {
    //default BinaryTree values
    let value = 1
    let left = 0
    let right = 5

    if (left < value) {
      expect(ExportedBinaryTree.left).toEqual(new BinaryTree(0))
    }

    if (right > value) {
      expect(ExportedBinaryTree.right).toEqual(new BinaryTree(5))
    }
  })
})
