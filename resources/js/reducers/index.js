import { combineReducers } from 'redux';
import modal from './modal';
import columns from './columns';

export default combineReducers({
    modal,
    columns
})