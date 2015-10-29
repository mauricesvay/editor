/**
 * Post processing actions
 */
export function changeSharpnessValue(value) {
    return {
        type: 'CHANGE_SHARPNESS_VALUE',
        value
    };
};

export function changeChromaticAberrationsValue(value) {
    return {
        type: 'CHANGE_CHROMATIC_ABERRATIONS_VALUE',
        value
    };
};

export function changeVignetteAmount(value) {
    return {
        type: 'CHANGE_VIGNETTE_AMOUNT',
        value
    };
};

export function changeVignetteHardness(value) {
    return {
        type: 'CHANGE_VIGNETTE_AMOUNT',
        value
    };
};

export function changeBloomThreshold(value) {
    return {
        type: 'CHANGE_BLOOM_THRESHOLD',
        value
    };
};

export function changeBloomIntensity(value) {
    return {
        type: 'CHANGE_BLOOM_INTENSITY',
        value
    };
};

export function changeBloomRadius(value) {
    return {
        type: 'CHANGE_BLOOM_RADIUS',
        value
    };
};

export function changeToneMappingType(value) {
    return {
        type: 'CHANGE_TONE_MAPPING_TYPE',
        value
    };
};

export function changeToneMappingExposure(value) {
    return {
        type: 'CHANGE_TONE_MAPPING_EXPOSURE',
        value
    };
};

export function changeToneMappingBrightness(value) {
    return {
        type: 'CHANGE_TONE_MAPPING_BRIGHTNESS',
        value
    };
};

export function changeToneMappingContrast(value) {
    return {
        type: 'CHANGE_TONE_MAPPING_CONTRAST',
        value
    };
};

export function changeToneMappingSaturation(value) {
    return {
        type: 'CHANGE_TONE_MAPPING_SATURATION',
        value
    };
};
