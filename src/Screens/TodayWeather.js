import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'


import React from 'react'

const TodayWeather = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 20 }}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Image style={{ height: 20, width: 20, }} source={require('../assets/openWeatherIcons/back.png')} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 23, fontWeight: 400, marginTop: -8, marginLeft: 17 }}>Today Weather Forecast</Text>
            </View>

            <View style={{ ...STYLES.card, marginTop: 200, height: '25%' }}>

                <View style={{ ...STYLES.column1, marginRight: 20 }}>

                    <Image style={{ height: 100, width: 100, marginLeft: 10 }} source={require('../assets/openWeatherIcons/sunrise.png')} />
                    <Text style={{ fontSize: 15, alignSelf: 'center', color: 'black' }}>6:30 AM</Text>
                    <Text style={{ fontSize: 30, fontWeight: 600, color: '#EEAF12', alignSelf: 'center', fontSize: 16, }}>Sunrise</Text>
                </View>

                <View style={{ ...STYLES.column1, }}>

                    <Image style={{ height: 100, width: 100, marginLeft: -20 }} source={require('../assets/openWeatherIcons/sunset.png')} />
                    <Text style={{ fontSize: 15, color: 'black' }}>6:30PM</Text>
                    <Text style={{ fontSize: 30, fontWeight: 600, color: '#D35400  ', fontSize: 16, }}>Sunset</Text>
                </View>


            </View>




            <View style={{ ...STYLES.card, height: '18%', marginTop: 420 }}>
                <View style={{ ...STYLES.column1, marginRight: 20 }}>
                    <Text style={{ marginLeft: -10, color: 'black', fontSize: 16 }}>28.86{'\u2103'}</Text>
                    <Text style={{ marginLeft: -18, fontSize: 10, width: 100, marginBottom: 20 }}>SCATTERED CLOUDS</Text>
                    <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/03d.png')} />
                    <Text style={{ marginLeft: -3 }}>11:30 AM</Text>

                </View>

                <View style={{ ...STYLES.column1, marginRight: 20 }}>
                    <Text style={{ marginLeft: -10, color: 'black', fontSize: 16, }}>28.83 {'\u2103'}</Text>
                    <Text style={{ marginLeft: -22, fontSize: 10, width: 100, marginBottom: 20 }}>SCATTERED CLOUDS</Text>
                    <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/03d.png')} />
                    <Text style={{ marginLeft: -3 }}>12:30 PM</Text>

                </View>

                <View style={{ ...STYLES.column1, marginRight: 20 }}>
                    <Text style={{ marginLeft: -10, color: 'black', fontSize: 16, }}>28.38{'\u2103'}</Text>
                    <Text style={{ marginLeft: -27, fontSize: 10, width: 100, marginBottom: 20 }}>SCATTERED CLOUDS</Text>
                    <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/04d.png')} />
                    <Text>1:30 PM</Text>

                </View>

            </View>
        </View>
    )
}

export default TodayWeather
const STYLES = StyleSheet.create({

    card: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: '16%',
        width: '89%',
        // margin: 320,

        elevation: 4,
        borderRadius: 35,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        position: 'absolute',
        alignSelf: 'center'
    },
    column1: {
        flex: 1,
        alignSelf: 'center', marginLeft: 50,


    }
})