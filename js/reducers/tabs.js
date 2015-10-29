function reduceTabs(state, action) {
    var newState;
    switch (action.type) {
        case 'CHANGE_TAB':
            return action.index;
        default:
            return state;
    }
}

export default reduceTabs;
