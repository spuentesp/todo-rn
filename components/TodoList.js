import React from 'react';
import { ScrollView } from 'react-native';
import TodoDetail from './TodoDetail';
import connect from "react-redux/es/connect/connect";
import {fetchTodos} from "../actions/todos";

class TodoList extends React.Component {

    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.loadTodos();
    }

    renderTodos() {

        return this.props.state.todos.map(todo =>
            <TodoDetail key={todo.title} todoItem={todo} />
        );
    }
    render() {

        return (
            <ScrollView>
                {this.renderTodos()}
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadTodos: () => {
            dispatch(fetchTodos());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
