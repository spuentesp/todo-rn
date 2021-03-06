import React from 'react';
import { View, Button } from 'react-native'
import Card from "./Card";
import CardSection from "./CardSection";
import {addTodo, fetchTodos} from "../actions/todos";

import { connect } from  'react-redux';
var t = require('tcomb-form-native');
var Form = t.form.Form;
const todoForm = t.struct({
    title: t.String,
    text: t.maybe(t.String),
});
const options = {};

class AddTodo extends React.Component {

    addTodoAction(){
        let value = this.refs.form.getValue();
        if (!value) {
            return;
        }
        let id = this.props.state.todos.length;
        value.id = id;
        this.props.onSubmit(value);

    }

    cerrarTodoAction(){
        this.props.navigation.navigate('TodoApp')
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Form ref='form' type={todoForm} options={options} />
                </CardSection>
                <CardSection>
                    <View style={{flex:1 , marginRight:10}} >
                        <Button title='completar' onPress={this.addTodoAction.bind(this)}>
                        </Button>
                    </View>
                    <View style={{flex:1}} >
                        <Button title='Cerrar' onPress={this.cerrarTodoAction.bind(this)}/>
                    </View>
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (value) => {
            dispatch(addTodo(value.id,value.title,value.text));
            dispatch(fetchTodos());
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);


