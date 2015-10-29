import React from 'react';
import { connect } from 'react-redux';

import Group from './widgets/Group';
import NumberedSliderWidget from './widgets/NumberedSlider';
import Placeholder from './widgets/Placeholder';
import ButtonGroup from './widgets/ButtonGroup';

import {changeEnvironmentOrientation, changeEnvironmentBrightness, changeEnvironmentBackgroundBlur} from '../actionCreators/lighting';

let TabLights = React.createClass({
    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <Group>
                    <div>ENVIRONMENT</div>
                    <select>
                        <option>Abandoned Sanatorium</option>
                    </select>
                    <Placeholder/>
                    <NumberedSliderWidget
                        name="Orientation"
                        min={0} max={360}
                        defaultValue={this.props.lighting.environment.orientation}
                        withBars
                        onChange={(value)=>{dispatch(changeEnvironmentOrientation(value))}}
                    />
                    <NumberedSliderWidget
                        name="Brightness"
                        min={0} max={35}
                        defaultValue={this.props.lighting.environment.brightness}
                        withBars
                        onChange={(value)=>{dispatch(changeEnvironmentBrightness(value))}}
                    />
                </Group>
                {/*
                <Group>
                    <div>
                        <label><input type="checkbox"/> Override background image</label>
                    </div>
                    <div>Blur</div>
                    <ButtonGroup
                        name="blur"
                        value="3"
                        options={{'0':'0', '1':'1', '2':'2', '3':'3'}}
                        onChange={(value)=>{dispatch(changeEnvironmentBackgroundBlur(value))}}
                    />
                    <NumberedSliderWidget name="Brightness" defaultValue={50} withBars />
                </Group>
                */}
                <Group>
                    <div>Lights</div>
                </Group>
            </div>
        )
    }
});


function select(state) {
    return state;
}

export default connect(select)(TabLights);
