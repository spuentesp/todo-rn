import React from 'react';
import { Text, View,Button } from 'react-native';
import Card  from './Card';
import CardSection from './CardSection';

export class TodoDetail extends React.Component {

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
                        <Button title='completar' onPress={() => console.log('click')}>
                            'Completar'
                        </Button>
                    </View>
                    <View style={{flex:1}} >
                        <Button title='Cerrar' onPress={() => console.log('click')}>
                            'Cerrar'
                        </Button>
                    </View>
                </CardSection>
            </Card>
        );
    }
}

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
