import React from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

    const { title, artist, thumbnail_image, image, url } = album;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContainerStyle}>
                    <Text style={styles.albumNameStyle}>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={styles.albumArtStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)} />
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
   headerContainerStyle: {
       flexDirection: 'column',
       justifyContent: 'space-around',
       marginLeft: 10
   },
    albumNameStyle: {
       fontSize: 18
    },
    thumbnailStyle: {
       height: 50,
       width: 50,
       borderRadius: 2
    },
    albumArtStyle: {
       height: 250,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;