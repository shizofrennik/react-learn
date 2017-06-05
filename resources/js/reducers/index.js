let user = localStorage.getItem('user'),
    showModal = !user;

let columns = localStorage.getItem('columns'),
    string = JSON.stringify([{id: 1, title: 'TODO', cards: []}, {id: 2, title: 'In Progress', cards: []}, {id: 3, title: 'Testing', cards: []}, {id: 4, title: 'Done', cards: []}]);

if(!columns) localStorage.setItem('columns', string);

let inititalState = {
    user: localStorage.getItem('user'),
    columns: JSON.parse(localStorage.getItem('columns')),
    showModal,
    modalContent: null
};

export default function (state = inititalState, action) {
    switch (action.type) {
        case 'SET_USER':
            localStorage.setItem('user', action.user);
            return Object.assign({}, state, {user: action.user});
        case 'SHOW_MODAL':
            return Object.assign({}, state, {showModal: true});
        case 'TOGGLE_MODAL':
            return Object.assign({}, state, {showModal: !state.showModal});   
        case 'SET_MODAL_CONTENT':
            return Object.assign({}, state, {content: action.content});
        case 'UPDATE_COLUMN':
            let columns = state.columns,
                column = action.column;
            columns.forEach((item, i) =>  {
                if(item.id == column.id) {
                    columns[i] = column;
                }
            });
            localStorage.setItem('columns', JSON.stringify(columns));
            return Object.assign({}, state, {columns});
        default:
            return state
    }
}