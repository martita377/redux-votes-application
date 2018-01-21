import { combineReducers } from 'redux';
import comments from './index';
import users from './users';

const app = combineReducers({
    comments,
    users
});