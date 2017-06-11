import {
    UPDATE_COLUMN,
    UPDATE_CARD,
    DELETE_CARD
} from '../constants';
import cardsReducer from './cards';

let columns = localStorage.getItem('columns'),
    string = JSON.stringify([
        {id: 1, title: 'TODO', cards: []},
        {id: 2, title: 'In Progress', cards: []},
        {id: 3, title: 'Testing', cards: []},
        {id: 4, title: 'Done', cards: []}
    ]);

if(!columns) localStorage.setItem('columns', string);

let initialState = {
    columns: JSON.parse(localStorage.getItem('columns'))
};

const ACTION_HANDLERS = {
    [UPDATE_COLUMN]: (state, action) => {
        let columns = state.columns.map(column => {
            if(column.id != action.column.id) {
                return {...column};
            }
            
            return {...action.column};
        });
        
        return {...state, columns};
    },
    [UPDATE_CARD]: (state, action) => {
        let columns = state.columns.map(column => {
            if(column.id != action.column.id) {
                return {...column};
            }
            
            return {...column, cards: cardsReducer(column, action)};
        });
        
        return {...state, columns};
    },
    [DELETE_CARD]: (state, action) => {
        let columns = state.columns.map(column => {
            if(column.id != action.column.id) {
                return {...column};
            }
            
            return {...column, cards: cardsReducer(column, action)};
        });
        
        return {...state, columns};
    }

};

export default function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}