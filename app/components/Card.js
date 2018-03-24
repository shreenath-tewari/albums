import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            { props.children }
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderColor: "#DDDDDD",
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 18
    }
});

export default Card;