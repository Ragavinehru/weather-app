import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'


const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 1000);
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <Image style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../assets/openWeatherIcons/splash.png')} />
        </View>
    )
}

export default Splash;