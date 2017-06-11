import {
    UPDATE_CARD,
    DELETE_CARD
} from '../constants'

let initialState = [];

const ACTION_HANDLERS = {
    [UPDATE_CARD]: (state, action) => {
        return state.cards.map(card => {
            if(card.id != action.card.id) {
                return {...state};
            }
            
            return {...action.card};
        }) 
    },
    [DELETE_CARD]: (state, action) => {
        return state.cards.filter(card => card.id != action.card.id);
    }
};

export default function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}