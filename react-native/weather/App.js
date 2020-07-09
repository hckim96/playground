import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = 'f45610611a10099a1ac47767f60fb43c';

const getWeather = async (latitude, longitude) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    // console.log(response.data.sys.country);
    return {
        ...response.data.weather[0],
        ...response.data.main,
        name: response.data.name,
        country: response.data.sys.country,
    };
};
//asdf
const getLocation = async () => {
    try {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            console.log('not granted');
            throw Error();
        } else {
            const result = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });
            // console.log(`result : ${result}`);
            return result.coords;
            //z
        }
    } catch (e) {
        // console.log(`error : ${e}`);
    }
};

export default class App extends React.Component {
    state = {
        coords: { latitude: 0, longitude: 0 },
    };

    async componentDidMount() {
        const coords = await getLocation();

        const weather = await getWeather(coords.latitude, coords.longitude);

        // console.log(coords);
        console.log(weather);
        this.setState({
            coords: coords,
            weather: weather,
        });
    }

    render() {
        const { coords, weather } = this.state;
        // console.log(`in render::${JSON.stringify(weather)}`);
        return (
            <View style={styles.container}>
                {/* <Text>
                    latitude : {coords && coords.latitude} longitude:
                    {coords && coords.longitude}
                </Text>
                <Text>
                    weather : {weather ? weather.main : ''} description :
                    {weather ? weather.description : ''}
                </Text> */}
                <Weather coords={coords} weather={weather}></Weather>
                <StatusBar style='auto' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
