import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';
const DailyWeather = ({ navigation }) => {
    // const data = [
    //     {
    //         id: 1,
    //         day: "Wednesday",
    //         date: '12/01',
    //         temp: 28,
    //         imageSource: require('../assets/openWeatherIcons/10d.png'),
    //         status: 'LIGHT RAIN',
    //         max: 28,
    //         min: 25,
    //     },
    //     {
    //         id: 1,
    //         day: "Thursday",
    //         date: '12/01',
    //         temp: 28,
    //         imageSource: require('../assets/openWeatherIcons/10d.png'),
    //         status: 'LIGHT RAIN',
    //         max: 28,
    //         min: 24,
    //     },
    //     {
    //         id: 1,
    //         day: "Friday",
    //         date: '12/01',
    //         temp: 29,
    //         imageSource: require('../assets/openWeatherIcons/10d.png'),
    //         status: 'OVERCAST RAIN',
    //         max: 28,
    //         min: 25,
    //     },
    //     {
    //         id: 1,
    //         day: "Saturday",
    //         date: '12/01',
    //         temp: 29,
    //         imageSource: require('../assets/openWeatherIcons/10d.png'),
    //         status: 'LIGHT RAIN',
    //         max: 29,
    //         min: 24,
    //     },
    //     {
    //         id: 1,
    //         day: "Sunday",
    //         date: '12/01',
    //         temp: 29,
    //         imageSource: require('../assets/openWeatherIcons/10d.png'),
    //         status: 'LIGHT RAIN',
    //         max: 29,
    //         min: 23,
    //     },
    //     {
    //         id: 1,
    //         day: "Monday",
    //         date: '12/01',
    //         temp: 29,
    //         imageSource: require('../assets/openWeatherIcons/10d.png'),
    //         status: 'LIGHT RAIN',
    //         max: 29,
    //         min: 23,
    //     },
    //     {
    //         id: 1,
    //         day: "Tuesday",
    //         date: '12/01',
    //         temp: 28,
    //         imageSource: require('../assets/openWeatherIcons/10d.png'),
    //         status: 'LIGHT RAIN',
    //         max: 28,
    //         min: 23,
    //     },
    //     {
    //         id: 1,
    //         day: "Wednesday",
    //         date: '12/01',
    //         temp: 28,
    //         imageSource: require('../assets/openWeatherIcons/10d.png'),
    //         status: 'MODERATE RAIN',
    //         max: 28,
    //         min: 23,
    //     },

    // ];

    const [loading, setloading] = useState(true);
    const [rise, setrise] = useState('');
    const [set, setset] = useState('');

    const [daily, setdaily] = useState([]);

    const [selected, setselected] = useState([])
    const [threehour, setthree] = useState([])

    useEffect(() => {
        const APIHour = () => {

            const apihour = 'https://api.openweathermap.org/data/2.5/onecall?lat=9.925201&lon=78.119774&exclude=minutely,current,hourly&appid=3a9bee9c35ea0fc21779ccf795b8f5e6&units=metric';

            setloading(true);
            fetch(apihour)
                .then((resp) => resp.json())
                .then((json) => {
                    setdaily(json.daily);
                    setloading(false);

                    console.log("hahah", daily[0])

                    // const timezoneOffset = sunrise;
                    // const utcTime = moment.utc();
                    // const localTime = utcTime.utcOffset(timezoneOffset / 60);
                    // const rise = localTime.format('MMMM Do YYYY, h:mm a');


                    // const timezoneset = sunset;
                    // const utc = moment.utc();
                    // const local = utc.utcOffset(timezoneset / 60);
                    // const set = local.format('h:mm a'); setset(set)



                    if (daily.length > 0) {
                        const daysseven = [];

                        for (let i = 0; i <= daily.length; i++) {
                            const timezoneOffset = daily[i].dt;
                            console.log("dt", timezoneOffset);
                            const utcTime = moment.utc();
                            const localTime = utcTime.utcOffset(timezoneOffset / 60);

                            const days = localTime.format('MMMM Do YYYY, h:mm a');
                            daysseven.push(days);
                            console.log("dtffffffffffffff", days);
                            console.log("dtff", daysseven);
                        }
                        setthree(daysseven)
                        console.log("threehours", threehour)
                    }
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


    const renderItem = ({ item }) => {
        const date = moment.unix(item.dt).format('MM/DD');
        const day = moment.unix(item.dt).format('dddd');
        const maxTemp = item.temp.max.toFixed(1);
        const minTemp = item.temp.min.toFixed(1);
        const weatherIcon = item.weather[0].icon;

        return (
            <View style={styles.cell}>
                <View>
                    <Text style={styles.text}>{day}</Text>
                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                        <Image style={styles.calendar} source={require('../assets/openWeatherIcons/calendar.png')} />
                        <Text style={{ marginLeft: 10 }}>{date}</Text>
                    </View>
                </View>

                <View style={{ alignItems: "center", }}>
                    <View style={{ flexDirection: 'row', alignItems: "center", }}>

                        <Text style={{
                            color: '#5A5A5A',
                            fontWeight: '500', fontSize: 15
                        }}>{item.temp.day.toFixed(1)}{'\u2103'}</Text>
                        <Image style={styles.img} source={getWeatherIcon(weatherIcon)} />
                    </View>
                    <Text style={styles.status}>{item.weather[0].description.toUpperCase()}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Image style={{ ...styles.img, }} source={require('../assets/openWeatherIcons/img_1.png')} />
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ color: '#D35400' }}>Max {maxTemp}{'\u2103'}</Text>
                        <Text style={{ color: '#00AEFF' }}>Min {minTemp}{'\u2103'}</Text>
                    </View>
                </View>
            </View>
        );
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#FCA351" />
                <Text>Loading...</Text>
            </View>
        );
    }
    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.appbar}>
                <TouchableOpacity onPress={navigation.goBack} style={styles.appbarimg}>
                    <Image style={{ height: 20, width: 20, }} source={require('../assets/openWeatherIcons/back.png')} />
                </TouchableOpacity>
                <Text style={styles.appbartext}>Daily Weather Forecast</Text>
            </View>

            <FlatList
                data={daily}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 50

    },
    cell: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 9,
        borderRadius: 8,
        padding: 11,
        // marginLeft:-15,
        marginHorizontal: 25,
    },
    image: {
        width: 30,
        height: 30,
        // marginBottom: 8,
    },
    calendar: {
        width: 16,
        height: 16,
    },
    img: {
        width: 45,
        height: 35
    },
    text: {
        color: '#5A5A5A',
        fontWeight: '500'
    },
    status: {
        fontSize: 12, color: '#5A5A5A',
        // fontWeight: '500'
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


});

export default DailyWeather;
