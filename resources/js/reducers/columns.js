import {
    UPDATE_COLUMN,
    // UPDATE_CARD,
    // DELETE_CARD
} from '../constants';
// import cardsReducer from './cards';

let columns = localStorage.getItem('columns'),
    string = JSON.stringify([
        {id: 1, title: 'TODO'},
        {id: 2, title: 'In Progress'},
        {id: 3, title: 'Testing'},
        {id: 4, title: 'Done'}
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
    }
};

export default function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}