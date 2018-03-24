import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Buy Now</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 4,
        backgroundColor: '#c0392b',
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        elevation: 2,
        shadowOffset: {width: 1, height: 2},
        marginLeft: 5,
        marginRight: 5
    },
    buttonTextStyle: {
        fontWeight: '600',
        fontSize: 18,
        color: '#FFFFFF',
        alignSelf: 'center',
        padding: 10
    }
})

export default Button;