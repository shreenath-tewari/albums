import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={ viewStyle }>
            <Text style={ textStyle }>{ props.headerText }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: '#FFFFFF'
    },
    viewStyle: {
        backgroundColor: '#c0392b',
        paddingTop: 15,
        paddingBottom: 15,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        elevation: 6,
        position: 'relative',
        marginBottom: 18
    }
});

export default Header;