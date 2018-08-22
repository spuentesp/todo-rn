import React from 'react';
import { View } from 'react-native';

export default class Card extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    };
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
