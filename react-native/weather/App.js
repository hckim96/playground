import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
const API_KEY = 'f45610611a10099a1ac47767f60fb43c';

const getWeather = async (latitude, longitude) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    return response.data.weather[0];
};
//asdf
const getLocation = async () => {
    try {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            console.log('not granted');
            throw Error();
        }
        const result = await Location.getCurrentPositionAsync();

        return result.coords;
    } catch (e) {}
};

export default class App extends React.Component {
    state = {
        coords: { latitude: 1, longitude: 2 },
    };
    async componentDidMount() {
        const coords = await getLocation();
        const weather = await getWeather(coords.latitude, coords.longitude);

        // console.log(coords);
        // console.log(weather);
        this.setState({
            coords: {
                latitude: coords.latitude,
                longitude: coords.longitude,
            },
            weather: weather,
        });
    }

    render() {
        const { coords, weather } = this.state;
        // console.log(`in render::${JSON.stringify(weather)}`);
        return (
            <View style={styles.container}>
                <Text>
                    latitude : {coords.latitude} longitude: {coords.longitude}
                </Text>
                <Text>
                    weather : {weather ? weather.main : ''} description :
                    {weather ? weather.description : ''}
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
