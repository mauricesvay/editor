function reduceHeader(state, action) {
    switch (action.type) {
        case 'CHANGE_RENDERER':
            return action.value;
        default:
            return state;
    }
}

export default reduceHeader;
