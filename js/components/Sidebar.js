import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import { connect } from 'react-redux';

import TabGeneral from './TabGeneral';
import TabLights from './TabLights';
import TabMaterials from './TabMaterials';
import TabPostProcessing from './TabPostProcessing';
import TabAnnotations from './TabAnnotations';
import TabAnimation from './TabAnimation';

import { changeTab } from '../actionCreators/tabs';

let Sidebar = React.createClass({

    render() {

        const { dispatch } = this.props;

        return (
            <div className="sidebar">
                <Tabs onSelect={(index) => {dispatch(changeTab(index))}} selectedIndex={this.props.currentTab}>
                    <TabList>
                        <Tab><i title="General" className="ion-ios-gear"></i></Tab>
                        <Tab><i title="Lighting" className="ion-ios-lightbulb"></i></Tab>
                        <Tab><i title="Materials" className="ion-image"></i></Tab>
                        <Tab><i title="Post Processing Filters" className="ion-ios-color-filter"></i></Tab>
                        <Tab><i title="Annotations" className="ion-ios-location"></i></Tab>
                        <Tab><i title="Animations" className="ion-ios-film"></i></Tab>
                    </TabList>
                    <TabPanel>
                        <TabGeneral {...this.props} />
                    </TabPanel>
                    <TabPanel>
                        <TabLights {...this.props} />
                    </TabPanel>
                    <TabPanel>
                        <TabMaterials {...this.props} />
                    </TabPanel>
                    <TabPanel>
                        <TabPostProcessing {...this.props} />
                    </TabPanel>
                    <TabPanel>
                        <TabAnnotations {...this.props} />
                    </TabPanel>
                    <TabPanel>
                        <TabAnimation {...this.props} />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
});

function select(state) {
    return state;
}

export default connect(select)(Sidebar);
