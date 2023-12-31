import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import GetLocation from 'react-native-get-location';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment-timezone';

const HomeScreen = ({ navigation }) => {
    const [formattedDate, setFormattedDate] = useState('');
    const [formattedTime, setFormattedTime] = useState('');
    const [HourTime, setHourTime] = useState('');
    const [loading, setloading] = useState(true);
    const [formattemp, setFormattedTemperature] = useState('')
    const [city, setcity] = useState('');
    const [data, setdata] = useState('');
    const [datahour, setdatahour] = useState('');
    const [hourlist, sethourlist] = useState([]);
    const [extractedData, setextractlist] = useState([]);
    const [selected, setselected] = useState([])
    const [threehours, setthree] = useState([])
    const [location, setlocation] = useState([])

    const backgroundImages = {
        '6:00 AM - 8:00 AM': require('../assets/BGImages/1.jpg'),
        '8:00 AM - 5:00 PM': require('../assets/BGImages/2.jpg'),
        '5:00 PM - 6:00 PM': require('../assets/BGImages/3.jpg'),
        '6:00 PM - 8:00 PM': require('../assets/BGImages/4.jpg'),
        '8:00 PM - 6:00 AM': require('../assets/BGImages/5.jpg'),
    };
    const findBackgroundImage = () => {
        const currentTime = moment();
        const currentHour = formattedTime;

        switch (true) {
            case (currentHour >= 6 && currentHour < 8):
                return backgroundImages['6:00 AM - 8:00 AM'];
            case (currentHour >= 8 && currentHour < 17):
                return backgroundImages['8:00 AM - 5:00 PM'];
            case (currentHour >= 17 && currentHour < 18):
                return backgroundImages['5:00 PM - 6:00 PM'];
            case (currentHour >= 18 && currentHour < 20):
                return backgroundImages['6:00 PM - 8:00 PM'];
            default:
                return backgroundImages['8:00 PM - 6:00 AM'];
        }
    };

    const backgroundImage = findBackgroundImage();

 
useEffect(() => {
    const getLocationAndFetchData = async () => {
        try {           
            Geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log("posiii",position)
                    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3a9bee9c35ea0fc21779ccf795b8f5e6&units=metric`;

                    setloading(true);
                    const response = await fetch(api);
                    const json = await response.json();

                
                    setdata(json);
                    setloading(false);
                    setFormattedTemperature(json?.main?.temp?.toFixed(1));

                    const weatherIcon = data.weather[0].icon;
                    const timezoneOffset = json?.timezone;
                    const utcTime = moment.utc();
                    const localTime = utcTime.utcOffset(timezoneOffset / 60);
                    const formatted = localTime.format('MMMM Do YYYY, h:mm a');
                    const formattedTime = localTime.format('h:mm a');
                    setFormattedTime(formattedTime);
                    setFormattedDate(formatted);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    setloading(false);
                },
                { enableHighAccuracy: true, timeout: 30000 }
            );
        } catch (error) {
            console.error('Error fetching data:', error);
            setloading(false);
        }
    };

   
    getLocationAndFetchData();
}, []); 

    
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
                console.log("data",data)
        };

        APIHour();
    }, []);
   
    // const locationr = () => {
    //     GetLocation.getCurrentPosition({
    //         enableHighAccuracy: true,
    //         timeout: 60000,
    //     })
    //         .then(location => {
    //             console.log("jjjjjj", location);
    //             setlocation(location);
    //         })
    //         .catch(error => {
    //             const { code, message } = error;
    //             console.warn("ggggggggggg", code, message);
    //         })

    // }
    // useEffect(() => {
    //     locationr();
    // }, []);

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#FCA351" />
                <Text>Loading...</Text>
            </View>
        );
    }

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
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <ImageBackground style={STYLES.background} source={backgroundImage} resizeMode='stretch'>

                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={openDrawer}>
                                <Image style={{ height: 25, width: 20, }} source={require('../assets/openWeatherIcons/menu.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Today')}>
                                <Image style={{ height: 20, width: 20, marginLeft: 30 }} source={require('../assets/openWeatherIcons/reload.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <Image style={{ height: 20, width: 20, }} source={require('../assets/openWeatherIcons/star.png')} />
                            <TouchableOpacity onPress={() => navigation.navigate('search')}>
                                <Image style={{ height: 20, width: 20, marginLeft: 30 }} source={require('../assets/openWeatherIcons/loupe.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                        <Image style={{ height: 30, width: 30, }} source={require('../assets/openWeatherIcons/pin.png')} />
                        <Text style={STYLES.galle}>{data.name}</Text>
                    </View>

                    <Text style={STYLES.daytime}>{formattedDate}</Text>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: -20 }}>
                        <Text style={STYLES.bigdegree}>{formattemp}{'\u02DA'} </Text>
                    <Image style={STYLES.scatterimg} source={getWeatherIcon(data?.weather[0]?.icon)} />
                    {/* <Image style={STYLES.scatterimg} source={data?.weather[0]?.icon ? getWeatherIcon(data.weather[0].icon) : require('../assets/openWeatherIcons/defaultIcon.png')} /> */}

                    </View>

                    <Text style={STYLES.scatterclouds}>{(data?.weather[0]?.main || 'HAZE').toUpperCase()}</Text>
                {/* <Text style={STYLES.scatterclouds}>HAZE</Text>  */}
                    <View style={{ ...STYLES.card, justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 40, paddingVertical: 30 }}>
                        <View style={{ ...STYLES.column1 }}>
                            <Image style={STYLES.img1} source={require('../assets/openWeatherIcons/img.png')} />
                            <Text style={STYLES.weather}>Max Temp</Text>
                            <Text style={STYLES.degree}>{data?.main?.temp}{'\u2103'}</Text>
                        </View>

                        <View style={{ ...STYLES.column1 }}>
                            <Image style={STYLES.img1} source={require('../assets/openWeatherIcons/humidity.png')} />
                            <Text style={STYLES.weather}>Humidity</Text>
                            <Text style={STYLES.degree}>{data?.main?.humidity}%</Text>
                        </View>

                        <View style={{ ...STYLES.column1 }}>
                            <Image style={STYLES.img1} source={require('../assets/openWeatherIcons/wind.png')} />
                            <Text style={STYLES.weather}>Wind</Text>
                            <Text style={STYLES.degree}>{data?.wind?.speed}m/s</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Today')}>
                <View style={{ ...STYLES.card, marginTop: 10, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
                    <View style={{ ...STYLES.column1, }}>
                        <Text style={STYLES.temparature}>{selected[0]?.temp}{'\u2103'}</Text>
                        <Text style={STYLES.scatter}>{selected[0]?.weather[0]?.description.toUpperCase()}</Text>
                        <Image style={STYLES.img2} source={getWeatherIcon(selected[0]?.weather[0]?.icon)} />
                        <Text style={STYLES.timetext}>{threehours[0]}</Text>
                    </View>

                    <View style={{ ...STYLES.column1 }}>
                        <Text style={STYLES.temparature}>{selected[1]?.temp}{'\u2103'}</Text>
                        <Text style={STYLES.scatter}>{selected[1]?.weather[0]?.description.toUpperCase()}</Text>
                        <Image style={STYLES.img2} source={getWeatherIcon(selected[1]?.weather[0]?.icon)} />
                        <Text style={STYLES.timetext}>{threehours[1]}</Text>
                    </View>

                    <View style={{ ...STYLES.column1, marginRight: 2 }}>
                        <Text style={STYLES.temparature}>{selected[2]?.temp}{'\u2103'}</Text>
                        <Text style={STYLES.scatter}>{selected[2]?.weather[0]?.description.toUpperCase()}</Text>
                        <Image style={STYLES.img2} source={getWeatherIcon(selected[2]?.weather[0]?.icon)} />
                        <Text style={STYLES.timetext}>{threehours[2]}</Text>
                    </View>
                </View>
            </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View >
    )
}

export default HomeScreen;

const STYLES = StyleSheet.create({
    card: {

        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '89%',
        elevation: 4,
        borderRadius: 35,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,

        alignSelf: 'center'
    },
    column1: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    timetext: {
        color: '#A1A1A1', fontWeight: 'bold', fontSize: 16
    },
    scatter: {

        textAlign: 'center',
        fontSize: 10,
        width: 100,
        marginBottom: 20,
        color: '#5A5A5A'
    },

    img2: {

        height: 51,
        width: 55,
        marginBottom: 7
    },
    temparature: {
        color: 'black',
        fontSize: 18,
    },
    degree: {
        color: 'black',
        fontSize: 16,
    },
    weather: {
        fontSize: 13,
        color: '#5A5A5A'
    },
    img1: {
        height: 30,
        width: 30
    },
    scatterclouds: {
        color: 'white',
        fontSize: 28,
        fontWeight: '800',
        textAlign: 'center',
        marginTop: -25
    },
    scatterimg: {
        height: 90, width: 90, marginTop: 80, marginLeft: -59
    },
    bigdegree: { fontSize: 120, color: 'white', marginLeft: 30 },
    daytime: { fontSize: 17, color: 'white', alignSelf: 'center', },
    galle: { color: 'white', fontSize: 25, fontWeight: "600", marginLeft: 12 },
    background: {
        width: "100%",
        height: "100%",
    },
})
