import React from 'react';
import { connect } from 'react-redux';

import GroupWidget from './widgets/Group';
import ButtonGroup from './widgets/ButtonGroup';

import { fetchAnimations, deleteAnimation, updateRepeatMode, updateSpeed } from '../actionCreators/animation';

let TabAnimation = React.createClass({

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchAnimations('123456'));
    },

    handleDeleteClick(e) {
        const { dispatch } = this.props;
        var uid = parseInt(e.target.getAttribute('data-uid'), 10);
        dispatch(deleteAnimation(uid));
    },

    renderAnimationList() {
        const { dispatch } = this.props;

        if (this.props.animation.animations.length) {
            return this.props.animation.animations.map((animation) => {
                return (
                    <li key={animation.uid}>
                        <span>{animation.name}</span>
                        <button onClick={this.handleDeleteClick} data-uid={animation.uid} sortData={animation.uid}>Delete</button>
                    </li>
                );
            });
        } else {
            return <div>No animation</div>;
        }
    },

    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <GroupWidget>
                    <div>Repeat mode</div>
                    <ButtonGroup
                        name="animationMode"
                        value={this.props.animation.mode}
                        options={{'repeat-one':'Repeat one', 'repeat-all':'Repeat All', 'no-repeat': 'No repeat'}}
                        onChange={(value)=>{dispatch(updateRepeatMode(value))}}
                    />
                    <div>Speed</div>
                    <ButtonGroup
                        name="animationSpeed"
                        value={this.props.animation.speed}
                        options={{'s0.1':'0.1x', 's0.5':'0.5x', 's1': '1x', 's2': '2x'}}
                        onChange={(value)=>{dispatch(updateSpeed(value))}}
                    />
                </GroupWidget>
                <GroupWidget>
                    <ul>
                        {this.renderAnimationList()}
                    </ul>
                </GroupWidget>
            </div>
        )
    }
});

function select(state) {
    return state;
}

export default connect(select)(TabAnimation);
