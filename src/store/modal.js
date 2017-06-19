// ------------------------------------
// Constants
// ------------------------------------
export const SET_USER = 'SET_USER';
export const SHOW_MODAL = 'SHOW_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SET_MODAL_CONTENT = 'SET_MODAL_CONTENT';

// ------------------------------------
// Actions
// ------------------------------------
export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
};

export const showModalFunc = () => {
    return {
        type: SHOW_MODAL
    }
};

export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL
    }
};

export const setModalContent = (content) => {
    return {
        type: SET_MODAL_CONTENT,
        content
    }
};

// ------------------------------------
// Action Handlers
// ------------------------------------

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

// ------------------------------------
// Reducers
// ------------------------------------

let user = localStorage.getItem('user'),
    showModal = !user;

let modalState = {
    user: localStorage.getItem('user'),
    showModal,
    modalContent: null
};

export default function (state = modalState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}