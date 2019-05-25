var React = require('react');
var classnames = require('classnames');
var createReactClass = require("create-react-class");

var Tab = createReactClass({

  select: function () {
    var options = {
      selectedTab: this.props.index
    };
    this.props.selectTab(options);
  },
  render: function () {
    var classes = {
      'tab-item': true,
      'is-active': this.props.active
    };
    return (
      <div className={classnames(classes)} onClick={this.select}>
        {this.props.title}
      </div>
    );
  }
});

module.exports = Tab;
