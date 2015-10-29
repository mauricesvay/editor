import React from 'react';
import { connect } from 'react-redux';
import { updateRenderer } from '../actionCreators/header';

let Header = React.createClass({

    renderRenderer() {
        switch (this.props.renderer) {
            case 'pbrMetalness':
                return (
                    <div>
                        PBR (Metalness) <i className="ion-chevron-down"></i>
                    </div>
                )
            case 'pbrSpecular':
                return (
                    <div>
                        PBR (Specular) <i className="ion-chevron-down"></i>
                    </div>
                )
            case 'classic':
                return (
                    <div>
                        Classic <i className="ion-chevron-down"></i>
                    </div>
                )
            case 'matcap':
                return (
                    <div>
                        Matcap <i className="ion-chevron-down"></i>
                    </div>
                )
        }
    },

    handleRenderChange(e) {
        this.props.dispatch(updateRenderer(e.target.value));
    },

    render() {
        return (
            <div className="header-inner">
                <button className="header-exit">
                    <i className="ion-android-exit"></i>
                </button>
                <div className="header-mode">
                    {this.renderRenderer()}
                    <select value={this.props.renderer} onChange={this.handleRenderChange}>
                        <option value="classic">Classic</option>
                        <option value="pbrMetalness">PBR (Metalness)</option>
                        <option value="pbrSpecular">PBR (Specular)</option>
                        <option value="matcap">Matcap</option>
                    </select>
                </div>
                <div className="header-info">
                    My cool model
                </div>
                <div className="header-actions">
                    <button className="btn">Save</button>
                </div>
            </div>
        )
    }
});

function select(state) {
    return state;
}

export default connect(select)(Header);
