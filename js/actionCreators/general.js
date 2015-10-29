/**
 * General actions
 */
export function changeFOV(value) {
    return {
        type: 'CHANGE_FOV',
        value
    };
};

export function changeWireframeOpacity(value) {
    return {
        type: 'CHANGE_WIREFRAME_OPACITY',
        value
    };
};

export function changeShading(value) {
    return {
        type: 'CHANGE_SHADING',
        value
    };
};

export function changeBackgroundType(value) {
    return {
        type: 'CHANGE_BACKGROUND_TYPE',
        value
    };
}
