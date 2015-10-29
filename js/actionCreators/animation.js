export function requestAnimations(modelUid) {
    return {
        type: 'REQUEST_ANIMATIONS',
        modelUid
    };
};

export function receiveAnimations(modelUid, json) {
    return {
        type: 'RECEIVE_ANIMATIONS',
        modelUid,
        animations: json,
        receivedAt: Date.now()
    };
};

export function fetchAnimations(modelUid) {
    return function(dispatch) {
        dispatch(requestAnimations(modelUid));
        return fetch('/animations.json')
            .then(response => response.json())
            .then(json => dispatch(receiveAnimations(modelUid, json)));
    }
}

export function deleteAnimation(uid) {
    return {
        type: 'DELETE_ANIMATION',
        uid
    };
};

export function updateRepeatMode(value) {
    return {
        type: 'UPDATE_REPEAT_MODE',
        value
    };
};

export function updateSpeed(value) {
    return {
        type: 'UPDATE_SPEED',
        value
    };
};
