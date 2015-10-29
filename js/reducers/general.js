function reduceGeneral(state, action) {
    var newState;
    switch (action.type) {
        case 'CHANGE_SHADING':
            newState = {
                ...state,
                shading: {
                    ...state.shading,
                    value: action.value
                }
            }
            return newState;
        case 'CHANGE_FOV':
            newState = {
                ...state,
                camera: {
                    ...state.camera,
                    fov: action.value
                }
            };
            return newState;
        case 'CHANGE_WIREFRAME_OPACITY':
            newState = {
                ...state,
                wireframe: {
                    ...state.wireframe,
                    opacity: action.value
                }
            }
            return newState;
        case 'CHANGE_BACKGROUND_TYPE':
            newState = {
                ...state,
                background: {
                    ...state.background,
                    type: action.value
                }
            }
            return newState;
        default:
            return state;
    }
}

export default reduceGeneral;
