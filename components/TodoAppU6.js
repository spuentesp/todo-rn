import React from 'react';
import { Button,ScrollView } from 'react-native'
import Header from './Header';
import TodoList from "./TodoList";
import { connect } from  'react-redux';
import {setSection} from "../actions/sections";

class TodoAppU6 extends React.Component {
    styles = {
        bottomButton:{}
    };

    render() {
        let styles = this.styles;
        return (
            <ScrollView style={styles.container}>
                <Header title={this.props.selSection}/>
                    <TodoList/>
                <Button title='Login' onPress={() => this.props.navigation.navigate('AddTodo')}/>
            </ScrollView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodoClick: () => {
            dispatch(setSection('addTodo'))
        },
        onTodoListClick: () => {
            dispatch(setSection('todoList'))
        }
    }
};
const mapStateToProps = (state) => {
    return {
        selSection: state.sections
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoAppU6);

