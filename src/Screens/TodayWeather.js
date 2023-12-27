import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import moment from 'moment';

const TodayWeather = ({ navigation }) => {

    const [loading, setloading] = useState(true);
    const [rise, setrise] = useState('');
    const [set, setset] = useState('');

    const [datahour, setdatahour] = useState('');
    const [hourlist, sethourlist] = useState([]);

    const [selected, setselected] = useState([])
    const [threehours, setthree] = useState([])

    useEffect(() => {
        const APIHour = () => {
            const apihour = 'https://api.openweathermap.org/data/2.5/onecall?lat=9.925201&lon=78.119774&exclude=minutely,daily&appid=3a9bee9c35ea0fc21779ccf795b8f5e6&units=metric';

            setloading(true);
            fetch(apihour)
                .then((resp) => resp.json())
                .then((json) => {
                    setdatahour(json);
                    setloading(false);
                    sethourlist(json.hourly);
console.log("today weather",datahour)
                    const selectedhours = json.hourly.slice(0, 3);
                    setselected(selectedhours);
                    const sunrise = json.current.sunrise;
                    const sunset = json.current.sunset;

                    // const timezoneOffset = sunrise;
                    // const utcTime = moment.utc();
                    // const localTime = utcTime.utcOffset(timezoneOffset / 60);
                    // const rise = localTime.format('h:mm a'); setrise(rise)
                    const sunriseTime = moment.unix(sunrise);
                    const rise = sunriseTime.format('h:mm a');
                    setrise(rise);

                    const sunsetTime = moment.unix(sunset);
                    const set = sunsetTime.format('h:mm a');
                    setset(set);
console.log("sunrise sunset",rise,set)


                    const threehours = [];

                    for (let i = 0; i < selectedhours.length; i++) {
                        const dt = selectedhours[i]?.dt;
                        if (dt) {
                            const timezoneOffset = dt;
                            const utcTime = moment.utc();
                            const localTime = utcTime.utcOffset(timezoneOffset / 60);
                            const newset = localTime.format('h:mm a');
                            threehours.push(newset);
                        }
                    }
                    setthree(threehours);
                    console.log(threehours)
                })
                .catch((error) => {
                    console.error(error);
                    setloading(false);
                });
        };

        APIHour();
    }, []);

    const getWeatherIcon = (iconName) => {
        let iconPath;

        switch (iconName) {
            case '01d':
                iconPath = require('../assets/openWeatherIcons/01d.png');
                break;
            case '01n':
                iconPath = require('../assets/openWeatherIcons/01n.png');
                break;
            case '02d':
                iconPath = require('../assets/openWeatherIcons/02d.png');
                break;
            case '02n':
                iconPath = require('../assets/openWeatherIcons/02n.png');
                break;
            case '03d':
                iconPath = require('../assets/openWeatherIcons/03d.png');
                break;
            case '03n':
                iconPath = require('../assets/openWeatherIcons/03n.png');
                break;
            case '04d':
                iconPath = require('../assets/openWeatherIcons/04d.png');
                break;
            case '04n':
                iconPath = require('../assets/openWeatherIcons/04n.png');
                break;
            case '09d':
                iconPath = require('../assets/openWeatherIcons/09d.png');
                break;
            case '09n':
                iconPath = require('../assets/openWeatherIcons/09n.png');
                break;
            case '10d':
                iconPath = require('../assets/openWeatherIcons/10d.png');
                break;
            case '10n':
                iconPath = require('../assets/openWeatherIcons/10n.png');
                break;
            case '11d':
                iconPath = require('../assets/openWeatherIcons/11d.png');
                break;
            case '11n':
                iconPath = require('../assets/openWeatherIcons/11n.png');
                break;
            case '13d':
                iconPath = require('../assets/openWeatherIcons/13d.png');
                break;
            case '13n':
                iconPath = require('../assets/openWeatherIcons/13n.png');
                break;
            case '50d':
                iconPath = require('../assets/openWeatherIcons/50d.png');
                break;
            case '50n':
                iconPath = require('../assets/openWeatherIcons/50n.png');
                break;
            default:
                iconPath = require('../assets/openWeatherIcons/01n.png');
        }

        return iconPath;
    };




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
                        <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>{rise}</Text>
                        <Text style={{ fontSize: 30, fontWeight: 600, color: '#EEAF12', textAlign: 'center', fontSize: 20, }}>Sunrise</Text>
                    </View>

                    <View>
                        <Image style={{ height: 100, width: 100, }} source={require('../assets/openWeatherIcons/sunset.png')} />
                        <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>{set}</Text>
                        <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 600, color: '#D35400', fontSize: 20, }}>Sunset</Text>
                    </View>
                </View>

                <View style={{ ...STYLES.card, justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 20, marginTop: 40, marginBottom: 40 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>{selected[0]?.temp}{'\u2103'}</Text>
                        <Text style={{ fontSize: 10, width: 100, marginBottom: 20, fontWeight: 'bold' }}>{selected[0]?.weather[0]?.description.toUpperCase()}</Text>
                        <Image style={{ height: 55, width: 64, marginBottom: 7 }} source={getWeatherIcon(selected[0]?.weather[0]?.icon)} />
                        <Text style={{}}>{threehours[0]}</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, }}>{selected[1]?.temp} {'\u2103'}</Text>
                        <Text style={{ fontSize: 10, width: 100, marginBottom: 20, fontWeight: 'bold' }}>{selected[1]?.weather[0]?.description.toUpperCase()}</Text>
                        <Image style={{ height: 55, width: 64, marginBottom: 7 }} source={getWeatherIcon(selected[1]?.weather[0]?.icon)} />
                        <Text style={{}}>{threehours[1]}</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, }}>{selected[2]?.temp}{'\u2103'}</Text>
                        <Text style={{ fontSize: 10, width: 100, marginBottom: 20, fontWeight: 'bold' }}>{selected[2]?.weather[0]?.description.toUpperCase()}</Text>
                        <Image style={{ height: 55, width: 64, marginBottom: 7 }} source={getWeatherIcon(selected[2]?.weather[0]?.icon)} />
                        <Text>{threehours[2]}</Text>
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