module.exports = function (context) {
  return {
    CallExpression: function (node) {
      if (node.callee.name !== 'require') {
        return;
      }

      if (!node.arguments.length) {
        context.report(node, 'require() called with no arguments', {});
      }

      if (!node.arguments[0]) {
        context.report(node, 'require() path is empty');
      }
    }
  };
};
