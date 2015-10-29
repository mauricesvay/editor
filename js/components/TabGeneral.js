import React from 'react';
import { connect } from 'react-redux';

import Group from './widgets/Group';
import NumberedSliderWidget from './widgets/NumberedSlider';
import ImageSlider from './widgets/ImageSlider';
import ButtonGroup from './widgets/ButtonGroup';

import { changeShading, changeFOV, changeWireframeOpacity, changeBackgroundType } from '../actionCreators/general';

let TabGeneral = React.createClass({

    renderBackground() {
        switch (this.props.general.background.type) {
            case 'image':
                return (
                    <div>
                        <select>
                            <option>Clean Dark</option>
                            <option>Dirty Dark</option>
                            <option>Clean Light</option>
                            <option>Dirty Light</option>
                        </select>
                        <button>Import background</button>
                    </div>
                );
            case 'environment':
                if (this.props.lighting.environment.uid) {
                    return <div>
                        <select>
                            <option>Abandoned Sanatorium</option>
                        </select>
                        <div>Blur</div>
                        <ButtonGroup
                            name="blur"
                            value="3"
                            options={{'0':'0', '1':'1', '2':'2', '3':'3'}}
                        />
                        <NumberedSliderWidget name="Brightness" defaultValue={50} withBars />
                    </div>
                } else {
                    return <div>Please select an environment first</div>
                }
            case 'none':
            default:
                return;
        }
    },

    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <Group>
                    <div>ORIENTATION</div>
                    <ButtonGroup
                        name="ORIENTATION"
                        value=""
                        options={{'X':'X', 'Y':'Y', 'Z':'Z'}}
                    />
                </Group>
                <Group>
                    <div>BACKGROUND</div>
                    <ButtonGroup
                        name="backgroundSource"
                        value={this.props.general.background.type}
                        options={{'image':'Image', 'environment':'Environment', 'none': 'None'}}
                        onChange={(value)=>{dispatch(changeBackgroundType(value))}}
                    />
                    {this.renderBackground()}
                </Group>
                <Group>
                    <div>SHADING</div>
                    <ButtonGroup
                        name="shading"
                        value={this.props.general.shading.value}
                        options={{'lit':'Lit (default)', 'shadeless':'Shadeless'}}
                        onChange={(value)=>{dispatch(changeShading(value))}}
                    />
                </Group>
                <Group>
                    <div>CAMERA</div>
                    <NumberedSliderWidget
                        name="Field of view"
                        defaultValue={this.props.general.camera.fov}
                        withBars
                        min={1} max={179}
                        onChange={(value)=>{dispatch(changeFOV(value))}}
                    />
                    <div style={{display:'flex', color: '#888', fontSize: '11px'}}>
                        <div style={{flex: 1, textAlign:'left'}}>Orthographic</div>
                        <div style={{flex: 1, textAlign:'right'}}>Wide angle</div>
                    </div>
                </Group>
                <Group>
                    <ImageSlider
                        name="WIREFRAME"
                        defaultValue={this.props.general.wireframe.opacity}
                        withBars
                        onChange={(value)=>{dispatch(changeWireframeOpacity(value))}}
                    />
                </Group>
            </div>
        )
    }
});

function select(state) {
    return state;
}

export default connect(select)(TabGeneral);
