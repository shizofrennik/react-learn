import {
    SET_USER, 
    SHOW_MODAL, 
    TOGGLE_MODAL, 
    SET_MODAL_CONTENT, 
    UPDATE_COLUMN,
    UPDATE_CARD,
    DELETE_CARD
} from '../constants'

let user = localStorage.getItem('user'),
    showModal = !user;

let columns = localStorage.getItem('columns'),
    string = JSON.stringify([
        {id: 1, title: 'TODO', cards: []},
        {id: 2, title: 'In Progress', cards: []},
        {id: 3, title: 'Testing', cards: []},
        {id: 4, title: 'Done', cards: []}
    ]);

if(!columns) localStorage.setItem('columns', string);

let inititalState = {
    user: localStorage.getItem('user'),
    columns: JSON.parse(localStorage.getItem('columns')),
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
    },
    [UPDATE_COLUMN]: (state, action) => {
        let columns = state.columns,
            column = action.column;
        columns.forEach((item, i) =>  {
            if(item.id == column.id) {
                columns[i] = column;
            }
        });
        return {...state, columns};
    },
    [UPDATE_CARD]: (state, action) => {
        let newState = {...state},
            columns = newState.columns,
            column = action.column,
            card = action.card;

        columns.forEach(col => {
            if(col.id == column.id) {
                col.cards.forEach((item, i) => {
                    if(item.id == card.id) {
                        col.cards[i] = card;
                    }    
                })
            }
        });
        return newState;
    },
    [DELETE_CARD]: (state, action) => {
        let newState = {...state},
            columns = newState.columns,
            column = action.column,
            card = action.card;

        columns.forEach(col => {
            if(col.id == column.id) {
                col.cards.forEach((item, i) => {
                    if(item.id == card.id) {
                        column.cards.splice(i, 1);
                    }
                })
            }
        });
        return newState;
    }

};

export default function (state = inititalState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}