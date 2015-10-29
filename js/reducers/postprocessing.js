function reducePostProcessing(state, action) {
    var newState;
    switch (action.type) {
        case 'CHANGE_SHARPNESS_VALUE':
            newState = {
                ...state,
                sharpness: {
                    value: action.value
                }
            };
            return newState;
        case 'CHANGE_CHROMATIC_ABERRATIONS_VALUE':
            newState = {
                ...state,
                chromaticAberrations: {
                    value: action.value
                }
            };
            return newState;
        case 'CHANGE_VIGNETTE_AMOUNT':
            newState = {
                ...state,
                vignette: {
                    ...state.vignette,
                    amount: action.value
                }
            };
            return newState;
        case 'CHANGE_VIGNETTE_HARDNESS':
            newState = {
                ...state,
                vignette: {
                    ...state.vignette,
                    hardness: action.value
                }
            };
            return newState;
        case 'CHANGE_BLOOM_THRESHOLD':
            newState = {
                ...state,
                bloom: {
                    ...state.bloom,
                    threshold: action.value
                }
            };
            return newState;
        case 'CHANGE_BLOOM_INTENSITY':
            newState = {
                ...state,
                bloom: {
                    ...state.bloom,
                    intensity: action.value
                }
            };
            return newState;
        case 'CHANGE_BLOOM_RADIUS':
            newState = {
                ...state,
                bloom: {
                    ...state.bloom,
                    radius: action.value
                }
            };
            return newState;
        case 'CHANGE_TONE_MAPPING_TYPE':
            newState = {
                ...state,
                toneMapping: {
                    ...state.toneMapping,
                    type: action.value
                }
            };
            return newState;
        case 'CHANGE_TONE_MAPPING_EXPOSURE':
            newState = {
                ...state,
                toneMapping: {
                    ...state.toneMapping,
                    exposure: action.value
                }
            };
            return newState;
        case 'CHANGE_TONE_MAPPING_BRIGHTNESS':
            newState = {
                ...state,
                toneMapping: {
                    ...state.toneMapping,
                    brightness: action.value
                }
            };
            return newState;
        case 'CHANGE_TONE_MAPPING_CONTRAST':
            newState = {
                ...state,
                toneMapping: {
                    ...state.toneMapping,
                    contrast: action.value
                }
            };
            return newState;
        case 'CHANGE_TONE_MAPPING_SATURATION':
            newState = {
                ...state,
                toneMapping: {
                    ...state.toneMapping,
                    saturation: action.value
                }
            };
            return newState;
        default:
            return state;
    }
}

export default reducePostProcessing;
