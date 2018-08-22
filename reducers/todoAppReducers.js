import React from 'react';
import { combineReducers } from 'redux'
import todos from "./todos";
import sections from "./sections";


const todoAppReducers = combineReducers({
    todos: todos,
    sections: sections
});
export default todoAppReducers;