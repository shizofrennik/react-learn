// ------------------------------------
// Constants
// ------------------------------------
export const ADD_CARD = 'ADD_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

// ------------------------------------
// Actions
// ------------------------------------

export const addCard = (column, card) => {
    return {
        type: ADD_CARD,
        column,
        card
    }
};

export const updateCard = (column, card) => {
    return {
        type: UPDATE_CARD,
        column,
        card
    }
};

export const deleteCard = (column, card) => {
    return {
        type: DELETE_CARD,
        column,
        card
    }
};

// ------------------------------------
// Action Handlers
// ------------------------------------

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

// ------------------------------------
// Reducers
// ------------------------------------
let cardInitialState = [];

export default function (state = cardInitialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}