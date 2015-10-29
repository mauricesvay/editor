import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Header from './Header';

let App = React.createClass({
    render() {
        return (
            <div className="app">
                <header className="header">
                    <Header {...this.props}></Header>
                </header>
                <div className="main">
                    <Sidebar {...this.props}></Sidebar>
                    {this.dumpState()}
                </div>
            </div>
        );
    },

    dumpState() {
        var out = JSON.stringify(this.props, null, 4);
        return (
            <pre className="dump">
                {out}
            </pre>
        );
    }
});

function select(state) {
    return state;
}

export default connect(select)(App);
