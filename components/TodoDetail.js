import React from 'react';
import { Text, View,Button } from 'react-native';
import Card  from './Card';
import CardSection from './CardSection';
import {deleteTodo, fetchTodos} from "../actions/todos";
import connect from "react-redux/es/connect/connect";

class TodoDetail extends React.Component {

    deleteTodo(){
        let id = this.props.todoItem.id;
        console.log(id)
        this.props.deleteTodo(id)
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{this.props.todoItem.title}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Text>{this.props.todoItem.detail}</Text>
                </CardSection>
                <CardSection>
                    <View style={{flex:1 , marginRight:10}} >
                        <Button title='completar' onPress={() => this.deleteTodo()}>
                            'Completar'
                        </Button>
                    </View>
                </CardSection>
            </Card>
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
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(TodoDetail);


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};
