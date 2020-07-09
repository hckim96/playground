import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const weatherList = {};

export default Weather = (props) => {
    if (props) {
        // console.log(props);
    }
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <View style={styles.half}>
                <Text style={styles.text}>
                    {JSON.stringify(props.weather)} C{' '}
                </Text>
            </View>

            <View style={styles.half}>
                <Text style={styles.text}>half 2</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    half: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        textAlignVertical: 'center',
    },
    text: {
        paddingTop: 100,
    },
});
