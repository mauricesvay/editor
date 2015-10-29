function reduceLigthing(state, action) {
    var newState;
    switch (action.type) {
        case 'CHANGE_ENVIRONMENT_ORIENTATION':
            newState = {
                ...state,
                environment: {
                    ...state.environment,
                    orientation: action.value
                }
            };
            return newState;
        case 'CHANGE_ENVIRONMENT_BRIGHTNESS':
            newState = {
                ...state,
                environment: {
                    ...state.environment,
                    brightness: action.value
                }
            };
            return newState;
        case 'CHANGE_ENVIRONMENT_BACKGROUND_BLUR':
            newState = {
                ...state,
                environment: {
                    ...state.environment,
                    backgroundBlur: action.value
                }
            };
            return newState;
        default:
            return state;
    }
}

export default reduceLigthing;
