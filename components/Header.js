import React from 'react';
import { Text, View } from 'react-native';

export default class Card extends React.Component {
    render() {
        const {textStyle, viewStyle} = styles;

        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.headerText}</Text>
            </View>
        );
    };
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};


