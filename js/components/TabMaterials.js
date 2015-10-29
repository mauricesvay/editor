import React from 'react';
import { connect } from 'react-redux';

import GroupWidget from './widgets/Group';
import ImageSlider from './widgets/ImageSlider';
import ButtonGroup from './widgets/ButtonGroup';

let TabMaterials = React.createClass({
    render() {

        var isPbrMetalness = (this.props.renderer === 'pbrMetalness');
        var isPbrSpecular = (this.props.renderer === 'pbrSpecular');
        var isClassic = (this.props.renderer === 'classic');
        var isMatcap = (this.props.renderer === 'matcap');
        var isPbr = (isPbrMetalness || isPbrSpecular)

        return (
            <div>
                <GroupWidget visible={!isMatcap}>
                    <div className="materials-list scrollable">
                        <div className="material-preview active">
                            <img src="assets/img/sphere.png" width="48" height="48"/>
                            <span>Material.001</span>
                        </div>
                        <div className="material-preview">
                            <img src="assets/img/sphere.png" width="48" height="48"/>
                            <span>Material.002</span>
                        </div>
                        <div className="material-preview">
                            <img src="assets/img/sphere.png" width="48" height="48"/>
                            <span>Material.003</span>
                        </div>
                        <div className="material-preview">
                            <img src="assets/img/sphere.png" width="48" height="48"/>
                            <span>Material.004</span>
                        </div>
                    </div>
                </GroupWidget>
                <GroupWidget visible={isClassic}>
                    <ImageSlider name="DIFFUSE" defaultValue={50} withBars />
                </GroupWidget>
                <GroupWidget visible={isClassic}>
                    <div>SPECULAR</div>
                    <ImageSlider name="Color" defaultValue={50} withBars />
                    <ImageSlider name="Glossiness" defaultValue={50} withBars />
                </GroupWidget>
                <GroupWidget visible={isPbrMetalness}>
                    <ImageSlider name="Base color" defaultValue={50} withBars />
                    <ImageSlider name="Metalness" defaultValue={50} withBars />
                    <ImageSlider name="Specular F0" defaultValue={50} withBars />
                </GroupWidget>
                <GroupWidget visible={isPbrSpecular}>
                    <ImageSlider name="Albedo" defaultValue={50} withBars />
                    <ImageSlider name="Specular" defaultValue={50} withBars />
                </GroupWidget>
                <GroupWidget visible={isPbr}>
                    <div>ROUGHNESS/GLOSSINESS</div>
                    <ImageSlider name="Roughness" defaultValue={50} withBars />
                    <ButtonGroup
                        name="roughgloss"
                        value="roughness"
                        options={{'roughness':'Roughness map', 'glossiness':'Gloss. map'}}
                        onChange={(value)=>{console.log(value)}}
                    />
                </GroupWidget>
                <GroupWidget>
                    <ImageSlider name="NORMAL/BUMP" defaultValue={50} withBars />
                    <ButtonGroup
                        name="normalmap"
                        value="normal"
                        options={{'normal':'Normal map', 'bump':'Bump map'}}
                        onChange={(value)=>{console.log(value)}}
                    />
                </GroupWidget>
                <GroupWidget visible={isClassic}>
                    <ImageSlider name="LIGHTMAP" defaultValue={50} withBars />
                </GroupWidget>
                <GroupWidget visible={isPbr}>
                    <ImageSlider name="AO" defaultValue={50} withBars />
                </GroupWidget>
                <GroupWidget visible={isPbr}>
                    <ImageSlider name="CAVITY" defaultValue={50} withBars />
                </GroupWidget>
                <GroupWidget>
                    <ImageSlider name="TRANSPARENCY" defaultValue={50} withBars />
                    <ButtonGroup
                        name="transparencyType"
                        value="blending"
                        options={{'blending':'Alpha Blending', 'masking':'Alpha Masking'}}
                        onChange={(value)=>{console.log(value)}}
                    />
                </GroupWidget>
                <GroupWidget visible={!isMatcap}>
                    <ImageSlider name="EMISSION" defaultValue={50} withBars />
                </GroupWidget>
                <GroupWidget visible={isClassic}>
                    <ImageSlider name="ENV. REFLECTION" defaultValue={50} withBars />
                </GroupWidget>
                <GroupWidget>
                    <div>FACES RENDERING</div>
                    <ButtonGroup
                        name="culling"
                        value="single"
                        options={{'single':'Single sided', 'double':'Double sided'}}
                        onChange={(value)=>{console.log(value)}}
                    />
                </GroupWidget>
            </div>
        )
    }
});

function select(state) {
    return state;
}

export default connect(select)(TabMaterials);
