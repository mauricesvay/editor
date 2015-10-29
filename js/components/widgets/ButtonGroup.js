import React from 'react';


let NumberedSlider = React.createClass({
    getInitialState() {
        return {
            value: this.props.value
        }
    },
    handleChange: function(event) {
        if (this.props.onChange && event.target.value !== this.state.value) {
            this.props.onChange(event.target.value);
        }
        this.setState({value: event.target.value});
    },
    renderValues() {
        var keys = Object.keys(this.props.options);
        return keys.map((key, i) => {
            return (
                <label className={this.state.value === key ? 'active' : ''} key={ 'button-' + this.props.name + '-' + key }>
                    <input type="radio" name={this.props.name} value={key} checked={this.state.value === key} onChange={this.handleChange} />
                    <span>{this.props.options[key]}</span>
                </label>
            );
        });
    },
    render() {
        return (
            <div className="widget-buttongroup">
                {this.renderValues()}
            </div>
        )
    }
});

module.exports = NumberedSlider;
