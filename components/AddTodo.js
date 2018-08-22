import React from 'react';
import { View, Button } from 'react-native'
import Card from "./Card";
import CardSection from "./CardSection";
import {addTodo} from "../actions/todos";

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
        if (value) {
            this.props.onSubmit(value)
        }
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
                        <Button title='Cerrar' onPress={() => this.props.navigation.navigate('TodoList')}/>
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
            dispatch(addTodo(value.title,value.text));
            this.props.navigation.navigate('TodoList')
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);


