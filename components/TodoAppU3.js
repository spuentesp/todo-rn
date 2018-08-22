import React from 'react';
import { View, Button } from 'react-native'
import Header from './Header';
import { connect } from  'react-redux';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import {setSection} from "../actions/sections";
import {Fade} from "../animations/Fade";

class TodoApp extends React.Component {
    styles = {
        bottomButton:{}
    };

    pickButton(){
        if(this.state.section === 'todolist'){
            return <Button
                onPress={()=>{
                    this.changeStateSection('addtodo')}}
                title="Add Todo"
            />
        }else{
            return <Button
                onPress={()=>{
                    this.changeStateSection('todolist')}}s
                title="Cancel"
            />
        }
    }


    render() {
        return (
                <View style={styles.container}>
                    <Header title={'todo app'}/>
                    <Fade visible={this.state.section === 'todolist'}>
                        <TodoList/>
                    </Fade>
                    <Fade visible={this.state.section !== 'todolist'}>
                        <AddTodo/>
                    </Fade>

                    {this.pickButton()}
                </View>
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
}
const mapStateToProps = (state) => {
    return {
        selSection: state.sections
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);

