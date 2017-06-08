import {SET_USER, SHOW_MODAL, TOGGLE_MODAL, SET_MODAL_CONTENT, UPDATE_COLUMN} from '../constants'

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

export const updateColumn = (column) => {
    return {
        type: UPDATE_COLUMN,
        column
    }
};