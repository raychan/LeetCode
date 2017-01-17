var Node = require('./Node');

exports.fromArray = function (valArray) {
  var nodeArray = valArray.map(function (val) {
    return val === null ? null : new Node(val);
  }).map(function (node, index, nodeArray) {
    if(node !== null) {
      node.left = nodeArray[index * 2 + 1] || null;
      node.right = nodeArray[index * 2 + 2] || null;
    }
    return node;
  })
  return nodeArray[0]
}