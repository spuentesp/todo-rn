import React from 'react';
import { Button,ScrollView } from 'react-native'
import Header from './Header';
import { connect } from  'react-redux';
import TodoList from "./TodoList";

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
                <View>
                <Button title='Add Todo' onPress={() => this.props.navigation.navigate('AddTodo')}/>
                </View>
                <View>
                <Button title='Show Camera' onPress={() => this.props.navigation.navigate('CameraComponent')}/>
                </View>
            </ScrollView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};
const mapStateToProps = (state) => {
    return {
        selSection: state.sections
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoAppU6);

