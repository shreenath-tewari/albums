import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import AlbumList from './app/components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.containerStyle}>
            <Header headerText={'Albums!'} />
            <AlbumList />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    }
});
