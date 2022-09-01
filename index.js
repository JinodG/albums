// Import a libraryto help create a component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlBumList from './src/components/AlbumList';

// Create a components
const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlBumList />
        </View>


    );
};


// Render it to the device
AppRegistry.registerComponent('albums', () => App);