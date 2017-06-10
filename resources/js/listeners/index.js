export const storage = () => {
    let currentUser, currentColumn;
    
    return () => {
        let previousUser = currentUser;
        let previousColumn = currentColumn;
        currentUser = store.getState().modal.user;
        currentColumn = JSON.stringify(store.getState().columns.columns);

        if(currentUser != previousUser) {
            localStorage.setItem('user', store.getState().modal.user);
        }
        if(currentColumn != previousColumn) {
            localStorage.setItem('columns', JSON.stringify(store.getState().columns.columns));
        }    
    }
};