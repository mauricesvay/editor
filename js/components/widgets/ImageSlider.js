import React from 'react';
import NumberedSlider from './NumberedSlider';

let ImageSlider = React.createClass({
    render() {
        var name = this.props.name ? this.props.name : '';
        var enabled = this.props.enabled ? this.props.enabled : true;
        return (
            <div className="widget-imageSlider">
                <NumberedSlider {...this.props} />
                <div className="widget-imageSlider-imageContainer">
                    <div className="widget-imageSlider-image"></div>
                </div>
            </div>
        )
    }
});

module.exports = ImageSlider;
