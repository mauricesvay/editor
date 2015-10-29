import reduceTabs from './reducers/tabs';
import reduceGeneral from './reducers/general';
import reduceLigthing from './reducers/lighting';
import reducePostProcessing from './reducers/postprocessing';
import reduceAnimation from './reducers/animation';
import reduceHeader from './reducers/header';

const initialState = {
    currentTab: 0,
    renderer: 'pbrMetalness',
    general: {
        shading: {
            value: 'lit'
        },
        background: {
            type: 'image',
            image: null
        },
        camera: {
            fov: 45
        },
        wireframe: {
            opacity: 80
        }
    },
    lighting: {
        environment: {
            enabled: true,
            uid: 123,
            name: '',
            orientation: 0,
            brightness: 10,
            backgroundVisible: true,
            backgroundBlur: 3,
            backgroundBrightness: 1
        }
    },
    materials: {

    },
    postProcessing: {
        sharpness: {
            value: 10
        },
        chromaticAberrations: {
            value: 10
        },
        vignette: {
            amount: 20,
            hardness: 10
        },
        bloom: {
            threshold: 60,
            intensity: 40,
            radius: 10
        },
        toneMapping: {
            type:'linear',
            exposure: 0,
            brightness: 0,
            contrast: 0,
            saturation: 0,
        }
    },
    animation: {
        mode: 'repeat-one',
        speed: 's1',
        animations: []
    }
};

function App(state = initialState, action) {
    return {
        ...state,
        renderer: reduceHeader(state.renderer, action),
        general: reduceGeneral(state.general, action),
        lighting: reduceLigthing(state.lighting, action),
        currentTab: reduceTabs(state.currentTab, action),
        postProcessing: reducePostProcessing(state.postProcessing, action),
        animation: reduceAnimation(state.animation, action)
    };
}

export default App;
