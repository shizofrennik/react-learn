import {
    ADD_CARD,
    UPDATE_CARD,
    DELETE_CARD
} from '../constants'

let initialState = [];

const ACTION_HANDLERS = {
    [ADD_CARD]: (state = initialState, action) => {
        return state.concat([action.card]);
    },
    [UPDATE_CARD]: (state = initialState, action) => {
        return state.map(card => {
            if(card.id != action.card.id) {
                return card;
            }
            
            return action.card;
        });
    },
    [DELETE_CARD]: (state = initialState, action) => {
        return state.filter(card => card.id != action.card.id);
    }
};

export default function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}