import {
    UPDATE_CARD,
    DELETE_CARD
} from '../constants'

let initialState = [];

const ACTION_HANDLERS = {
    [UPDATE_CARD]: (state, action) => {
        //???
    },
    [DELETE_CARD]: (state, action) => {
        //???
    }

};

export default function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}