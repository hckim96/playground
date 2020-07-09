import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
// import axios from 'axios';
// const API_KEY;

// const getWeather(latitude, longitude){

// }
const getLocation = async () => {
    const result = await Location.getCurrentPositionAsync();
    console.log(result.coords.latitude, result.coords.longitude);
    return result.coords;
};

export default class App extends React.Component {
    state = {
        coords: { latitude: 1, longitude: 2 },
    };
    async componentDidMount() {
        const coords = await getLocation();
        console.log(coords);
        this.setState({
            coords: { latitude: coords.latitude, longitude: coords.longitude },
        });
    }

    render() {
        const { coords } = this.state;

        return (
            <View style={styles.container}>
                <Text>
                    latitude : {coords.latitude} longitude: {coords.longitude}
                </Text>
                <StatusBar style='auto' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
