import React from 'react';

let Group = React.createClass({
    render() {
        var visible = this.props.visible !== undefined ? this.props.visible : true;
        var className = [
            'widget-group',
            visible ? 'widget-visible' : ''
        ].join(' ');
        return (
            <div className={className}>{this.props.children}</div>
        )
    }
});

module.exports = Group;
