
import React from 'react';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoAppReducers  from './reducers/todoAppReducers';
import { StackNavigator } from 'react-navigation';
import AddTodo from "./components/AddTodo";
import TodoApp from "./components/TodoAppU6";
import { Provider } from "react-redux";

const RootStack = StackNavigator({
        TodoApp:{
            screen: TodoApp
        },
        AddTodo:{
            screen:AddTodo
        }
    },
    {
        initialRouteName: 'TodoApp',
    });

export default class App extends React.Component {

    render() {
        let store = createStore(todoAppReducers,applyMiddleware(thunk));

        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}


