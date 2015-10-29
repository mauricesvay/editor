import React from 'react';
import { connect } from 'react-redux';

import Group from './widgets/Group';

let TabAnnotations = React.createClass({
    render() {
        return (
            <div className="placeholder">Double-click on the model to add an annotation</div>
        )
    }
});

function select(state) {
    return state;
}

export default connect(select)(TabAnnotations);
