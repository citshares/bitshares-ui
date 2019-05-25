var React = require('react');
var classnames = require('classnames');
var createReactClass = require("create-react-class");

var ActionSheetContent = createReactClass({
  getDefaultProps: function () {
    return {position: 'bottom'};
  },
  render: function () {
    var classes = {
      'action-sheet': true,
      'is-active': this.props.active
    };
    return (
      <div className={classnames(classes)}>{this.props.children}</div>
    );
  }
});

module.exports = ActionSheetContent;
