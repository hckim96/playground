import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const weatherList = {
    Thunderstorm: {
        iconName: 'weather-lightning-rainy',
        colors: ['#2c3e50', '#bdc3c7'],
    },
    Drizzle: { iconName: 'weather-rainy', colors: ['#2c3e50', '#bdc3c7'] },
    Rain: { iconName: 'weather-pouring', colors: ['#2c3e50', '#bdc3c7'] },
    Snow: { iconName: 'weather-snowy', colors: ['#2c3e50', '#bdc3c7'] },
    Clouds: { iconName: 'weather-cloudy', colors: ['#2c3e50', '#bdc3c7'] },

    Mist: { iconName: 'weather-hazy', colors: ['#636363', '#a2ab58'] },
    Smoke: { iconName: 'weather-hazy', colors: ['#636363', '#a2ab58'] },
    Haze: { iconName: 'weather-hazy', colors: ['#636363', '#a2ab58'] },
    Dust: { iconName: 'weather-hazy', colors: ['#636363', '#a2ab58'] },
    Fog: { iconName: 'weather-fog', colors: ['#636363', '#a2ab58'] },
    Sand: { iconName: 'weather-hazy', colors: ['#636363', '#a2ab58'] },
    Dust: { iconName: 'weather-hazy', colors: ['#636363', '#a2ab58'] },
    Ash: { iconName: 'weather-hazy', colors: ['#636363', '#a2ab58'] },
    Squall: { iconName: 'weather-windy', colors: ['#636363', '#a2ab58'] },
    Tornado: { iconName: 'weather-tornado', colors: ['#636363', '#a2ab58'] },

    Clear: {
        iconName: 'weather-sunny',
        colors: ['#2980b9', '#2980b9', '#6dd5fa', '#6dd5fa', '#ffffff'],
    },
};

export default Weather = (props) => {
    if (props) {
        console.log(props);
    }
    // const weatherName = props.weather.name;
    return (
        <LinearGradient
            style={styles.container}
            colors={weatherList[props.weather.main].colors}
            // style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
        >
            <StatusBar style='light' />
            <View style={styles.half}>
                <MaterialCommunityIcons
                    name={weatherList[props.weather.main].iconName}
                    size={80}
                    color='white'
                />
                <Text
                    style={styles.text}
                >{`${props.weather.name}, ${props.weather.country}`}</Text>
                <Text style={styles.text}>
                    {props.weather.temp} {'\u2103'}
                </Text>
            </View>

            <View style={styles.half}>
                <Text style={styles.text}>{props.weather.main}</Text>
                <Text style={styles.text}>{props.weather.description}</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    half: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
        padding: 'auto',
        textAlignVertical: 'center',
    },
    text: {
        color: 'white',
        fontSize: 23,
        fontWeight: '500',
    },
});
