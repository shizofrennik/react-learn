export const storage = () => {
    let currentUser, currentColumn;
    
    return () => {
        let previousUser = currentUser;
        let previousColumn = currentColumn;
        currentUser = store.getState().user;
        currentColumn = JSON.stringify(store.getState().columns);

        if(currentUser != previousUser) {
            localStorage.setItem('user', store.getState().user);
        }
        if(currentColumn != previousColumn) {
            localStorage.setItem('columns', JSON.stringify(store.getState().columns));
        }    
    }
};