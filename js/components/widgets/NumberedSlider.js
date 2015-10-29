import React from 'react';
import ReactSlider from 'react-slider';

let NumberedSlider = React.createClass({
    render() {
        var name = this.props.name ? this.props.name : '';
        var enabled = this.props.enabled ? this.props.enabled : true;
        return (
            <div className="widget-numberedSlider">
                <div className="widget-numberedSlider-header">
                    <div className="name">{name}</div>
                    <input className="value" type="text" value={this.props.defaultValue} onChange={()=>{}} />
                </div>
                <ReactSlider {...this.props} />
            </div>
        )
    }
});

module.exports = NumberedSlider;
