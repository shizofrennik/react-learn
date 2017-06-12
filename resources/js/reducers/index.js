import { combineReducers } from 'redux';
import modal from './modal';
import columns from './columns';
import cards from './cards';

export default combineReducers({
    modal,
    columns,
    cards
})