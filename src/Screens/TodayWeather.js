import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const TodayWeather = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={STYLES.appbar}>
                <TouchableOpacity onPress={navigation.goBack} style={STYLES.appbarimg}>
                    <Image style={{ height: 20, width: 20, }} source={require('../assets/openWeatherIcons/back.png')} />
                </TouchableOpacity>
                <Text style={STYLES.appbartext}>Today Weather Forecast</Text>
            </View>

            <ScrollView>
                <View style={{ ...STYLES.card, justifyContent: 'space-evenly', paddingVertical: 30, marginTop: 80 }}>
                    <View>
                        <Image style={{ height: 100, width: 100, }} source={require('../assets/openWeatherIcons/sunrise.png')} />
                        <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>6:30 AM</Text>
                        <Text style={{ fontSize: 30, fontWeight: 600, color: '#EEAF12', textAlign: 'center', fontSize: 20, }}>Sunrise</Text>
                    </View>

                    <View>
                        <Image style={{ height: 100, width: 100, }} source={require('../assets/openWeatherIcons/sunset.png')} />
                        <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>6:30PM</Text>
                        <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 600, color: '#D35400', fontSize: 20, }}>Sunset</Text>
                    </View>
                </View>

                <View style={{ ...STYLES.card, justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 20, marginTop: 40, marginBottom: 40 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>28.86{'\u2103'}</Text>
                        <Text style={{ fontSize: 10, width: 100, marginBottom: 20, fontWeight: 'bold' }}>SCATTERED CLOUDS</Text>
                        <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/03d.png')} />
                        <Text style={{}}>11:30 AM</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, }}>28.83 {'\u2103'}</Text>
                        <Text style={{ fontSize: 10, width: 100, marginBottom: 20, fontWeight: 'bold' }}>SCATTERED CLOUDS</Text>
                        <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/03d.png')} />
                        <Text style={{}}>12:30 PM</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, }}>28.38{'\u2103'}</Text>
                        <Text style={{ fontSize: 10, width: 100, marginBottom: 20, fontWeight: 'bold' }}>SCATTERED CLOUDS</Text>
                        <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/04d.png')} />
                        <Text>1:30 PM</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default TodayWeather

const STYLES = StyleSheet.create({

    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 36,
        width: '89%',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        alignSelf: 'center',
        paddingHorizontal: 16
    },
    appbar: { flexDirection: 'row', alignItems: 'center', marginBottom: 28, paddingTop: 50, paddingHorizontal: 16 },
    appbarimg: {
        width: 50,
        marginLeft: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appbartext: { color: '#5A5A5A', fontSize: 23, fontWeight: '500', marginLeft: 17 }

})