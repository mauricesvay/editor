import { _remove } from 'lodash';

function reduceAnimation(state, action) {
    var newState;
    switch (action.type) {
        case 'UPDATE_REPEAT_MODE':
            newState = {
                ...state,
                mode: action.value
            };
            return newState;
        case 'UPDATE_SPEED':
            newState = {
                ...state,
                speed: action.value
            };
            return newState;
        case 'RECEIVE_ANIMATIONS':
            newState = {
                ...state,
                animations: action.animations
            };
            return newState;
        case 'DELETE_ANIMATION':

            var newAnimations = [...state.animations];
            _remove(newAnimations, function(value, index, array){
                return value.uid === action.uid;
            });

            newState = {
                ...state,
                animations: newAnimations
            };
            return newState;

        case 'REQUEST_ANIMATIONS':
        default:
            return state;
    }
}

export default reduceAnimation;
