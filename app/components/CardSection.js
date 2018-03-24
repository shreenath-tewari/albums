import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            { props.children }
        </View>
        );
};

const styles = StyleSheet.create({
   containerStyle: {
       borderColor: '#DDDDDD',
       padding: 5,
       borderBottomWidth: 1,
       backgroundColor: '#FFFFFF',
       justifyContent: 'flex-start',
       flexDirection: 'row',
       position: 'relative'
   }
});

export default CardSection;
