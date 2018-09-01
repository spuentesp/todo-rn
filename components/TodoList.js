import React from 'react';
import { ScrollView } from 'react-native';
import { TodoDetail } from './TodoDetail';
import connect from "react-redux/es/connect/connect";

class TodoList extends React.Component {

    constructor(props){
        super(props);
    }

    renderTodos() {
        console.log('render this::',this);
        console.log('render state::',this.props.state);
        return this.props.state.todos.map(todo =>
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


const mapStateToProps = (state) => {
    console.log('load state::',state);
    return {
        state: state
    }
};
export default connect(mapStateToProps)(TodoList);
