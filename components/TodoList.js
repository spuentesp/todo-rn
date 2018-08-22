import React from 'react';
import { ScrollView } from 'react-native';
import { TodoDetail } from './TodoDetail';

export default class TodoList extends React.Component {

    constructor(props){
        super(props);
        this.state = { todos: [
                {title:'todo1',
                    detail:'esto es un todo'},
                {title:'todo2',
                    detail:'esto es un todo'},
                {title:'todo3',
                    detail:'esto es un todo'},
                {title:'todo4',
                    detail:'esto es un todo'},
            ] };
    }

    renderTodos() {
        return this.state.todos.map(todo =>
            <TodoDetail key={todo.title} todoItem={todo} />
        );
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderTodos()}
            </ScrollView>
        );
    }
}
