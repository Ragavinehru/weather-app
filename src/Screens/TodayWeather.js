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

                    const selectedhours = json.hourly.slice(0, 3);
                    setselected(selectedhours);
                    const sunrise = json.current.sunrise;
                    const sunset = json.current.sunset;

                    const timezoneOffset = sunrise;
                    const utcTime = moment.utc();
                    const localTime = utcTime.utcOffset(timezoneOffset / 60);
                    const rise = localTime.format('h:mm a'); setrise(rise)


                    const timezoneset = sunset;
                    const utc = moment.utc();
                    const local = utc.utcOffset(timezoneset / 60);
                    const set = local.format('h:mm a'); setset(set)



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
                        <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/03d.png')} />
                        <Text style={{}}>{threehours[0]}</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, }}>{selected[1]?.temp} {'\u2103'}</Text>
                        <Text style={{ fontSize: 10, width: 100, marginBottom: 20, fontWeight: 'bold' }}>{selected[1]?.weather[0]?.description.toUpperCase()}</Text>
                        <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/03d.png')} />
                        <Text style={{}}>{threehours[1]}</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, }}>{selected[2]?.temp}{'\u2103'}</Text>
                        <Text style={{ fontSize: 10, width: 100, marginBottom: 20, fontWeight: 'bold' }}>{selected[1]?.weather[0]?.description.toUpperCase()}</Text>
                        <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/04d.png')} />
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