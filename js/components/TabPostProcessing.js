import React from 'react';
import { connect } from 'react-redux';

import Group from './widgets/Group';
import ButtonGroup from './widgets/ButtonGroup';
import NumberedSliderWidget from './widgets/NumberedSlider';
import Placeholder from './widgets/Placeholder';

import * as ppa from '../actionCreators/postprocessing';

let TabPostProcessing = React.createClass({
    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <Group>
                    <NumberedSliderWidget
                        name="SHARPNESS"
                        defaultValue={this.props.postProcessing.sharpness.value}
                        withBars
                        onChange={(value)=>{dispatch(ppa.changeSharpnessValue(value))}}
                    />
                </Group>
                <Group>
                    <NumberedSliderWidget
                        name="CHROMATIC ABERRATIONS"
                        defaultValue={this.props.postProcessing.chromaticAberrations.value}
                        withBars
                        onChange={(value)=>{dispatch(ppa.changeChromaticAberrationsValue(value))}}
                    />
                </Group>
                <Group>
                    <div>VIGNETTE</div>
                    <NumberedSliderWidget
                        name="Amount"
                        defaultValue={this.props.postProcessing.vignette.amount}
                        withBars
                        onChange={(value)=>{dispatch(ppa.changeVignetteAmount(value))}}
                    />
                    <NumberedSliderWidget
                        name="Hardness"
                        defaultValue={this.props.postProcessing.vignette.hardness}
                        withBars
                        onChange={(value)=>{dispatch(ppa.changeVignetteHardness(value))}}
                    />
                </Group>
                <Group>
                    <div>BLOOM</div>
                    <NumberedSliderWidget
                        name="Threshold"
                        defaultValue={this.props.postProcessing.bloom.threshold}
                        withBars
                        onChange={(value)=>{dispatch(ppa.changeBloomThreshold(value))}}
                    />
                    <NumberedSliderWidget
                        name="Intensity"
                        defaultValue={this.props.postProcessing.bloom.intensity}
                        withBars
                        onChange={(value)=>{dispatch(ppa.changeBloomIntensity(value))}}
                    />
                    <NumberedSliderWidget
                        name="Radius"
                        defaultValue={this.props.postProcessing.bloom.radius}
                        withBars
                        onChange={(value)=>{dispatch(ppa.changeBloomRadius(value))}}
                    />
                </Group>
                <Group>
                    <div>TONE MAPPING</div>
                    <ButtonGroup
                        name="type"
                        value={this.props.postProcessing.toneMapping.type}
                        options={{linear:'Linear', 'reinhard': 'Reinhard', 'filmic': 'Filmic'}}
                        onChange={(value)=>{dispatch(ppa.changeToneMappingType(value))}}
                    />
                    <NumberedSliderWidget
                        name="Exposure" min={-100} max={100}
                        defaultValue={this.props.postProcessing.toneMapping.exposure}
                        withBars
                        onChange={(value)=>{dispatch(ppa.changeToneMappingExposure(value))}}
                    />
                    <NumberedSliderWidget
                        name="Brightness" min={-100} max={100}
                        defaultValue={this.props.postProcessing.toneMapping.brightness}
                        withBars
                        onChange={(value)=>{dispatch(ppa.changeToneMappingBrightness(value))}}
                    />
                    <NumberedSliderWidget
                        name="Contrast" min={-100} max={100}
                        defaultValue={this.props.postProcessing.toneMapping.contrast}
                        withBars
                        onChange={(value)=>{dispatch(ppa.changeToneMappingContrast(value))}}
                    />
                    <NumberedSliderWidget
                        name="Saturation" min={-100} max={100}
                        defaultValue={this.props.postProcessing.toneMapping.saturation}
                        withBars
                        onChange={(value)=>{dispatch(ppa.changeToneMappingSaturation(value))}}
                    />
                </Group>
                {/*
                <Group>
                    <div>COLOR BALANCE</div>
                    <Placeholder />
                </Group>
                */}
            </div>
        )
    }
});

function select(state) {
    return state;
}

export default connect(select)(TabPostProcessing);
