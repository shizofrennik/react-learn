// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_COLUMN = 'UPDATE_COLUMN';

// ------------------------------------
// Actions
// ------------------------------------

export const updateColumn = (column) => {
    return {
        type: UPDATE_COLUMN,
        column
    }
};

// ------------------------------------
// Action Handlers
// ------------------------------------

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

// ------------------------------------
// Reducers
// ------------------------------------
let localColumns = localStorage.getItem('columns'),
    string = JSON.stringify([
        {id: 1, title: 'TODO'},
        {id: 2, title: 'In Progress'},
        {id: 3, title: 'Testing'},
        {id: 4, title: 'Done'}
    ]);

if(!localColumns) localStorage.setItem('columns', string);

let columnsState = {
    columns: JSON.parse(localStorage.getItem('columns'))
};

export default function (state = columnsState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}