/**
 * Lighting actions
 */
export function changeEnvironmentOrientation(value) {
    return {
        type: 'CHANGE_ENVIRONMENT_ORIENTATION',
        value
    };
};
export function changeEnvironmentBrightness(value) {
    return {
        type: 'CHANGE_ENVIRONMENT_BRIGHTNESS',
        value
    };
};
export function changeEnvironmentBackgroundBlur(value) {
    return {
        type: 'CHANGE_ENVIRONMENT_BACKGROUND_BLUR',
        value: parseInt(value, 10)
    };
};
