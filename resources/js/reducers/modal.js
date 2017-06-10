import {
    SET_USER,
    SHOW_MODAL,
    TOGGLE_MODAL,
    SET_MODAL_CONTENT,
} from '../constants'

let user = localStorage.getItem('user'),
    showModal = !user;

let initialState = {
    user: localStorage.getItem('user'),
    showModal,
    modalContent: null
};

const ACTION_HANDLERS = {
    [SET_USER]: (state, action) => {
        return {...state,
            user: action.user,
            showModal: false
        };
    },
    [SHOW_MODAL]: (state, action) => {
        return { ...state, showModal: true };
    },
    [TOGGLE_MODAL]: (state, action) => {
        return { ...state, showModal: !state.showModal };
    },
    [SET_MODAL_CONTENT]: (state, action) => {
        return {...state, content: action.content};
    }
};

export default function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}