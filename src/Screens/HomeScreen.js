import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import GetLocation from 'react-native-get-location'
import moment from 'moment-timezone';

const HomeScreen = ({ navigation }) => {
    const [formattedDate, setFormattedDate] = useState('');



    useEffect(() => {
        APIFn();
        // APINEW();
    }, []);

    const [city, setcity] = useState('');
    const [data, setdata] = useState('');
    const [datanew, setdatanew] = useState('');

    const [loca, setlocation] = useState('');

    const APIFn = () => {
        const api = 'https://api.openweathermap.org/data/2.5/weather?lat=9.928818&lon=78.167385&appid=3a9bee9c35ea0fc21779ccf795b8f5e6'


        // const api = 'https://pro.openweathermap.org/data/2.5/forecast/climate?lat=35&lon=139&appid=f19d262769dd03d6a30e3c2960d16ae8'

        // setcity(data.city)
        // console.log("newwwwwwww", city)

        fetch(api)
            .then((resp) => resp.json())
            .then((json) => setdata(json))
            .catch((error) => console.error(error))


        console.log("datahhhh", data.wind)
        // setcity(data.city)
        console.log("cityyyyyy", city)

    }




    // const APINEW = () => {

    //     const apinew = 'https://api.openweathermap.org/data/2.5/forecast?lat=9.925201&lon=78.119774&appid=3a9bee9c35ea0fc21779ccf795b8f5e6'
    //     fetch(apinew)
    //         .then((resp) => resp.json())
    //         .then((json) => console.log(json))
    //         .catch((error) => console.error(error))
    //     console.log("new ", datanew)

    // }

    useEffect(() => {

        const timezoneOffset = data.timezone;
        const utcTime = moment.utc();

        const localTime = utcTime.utcOffset(timezoneOffset / 60);
        const formatted = localTime.format('MMMM Do YYYY, h:mm:ss a');
        setFormattedDate(formatted);

    }, []);

    //LOCATION
    const location = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
        })
            .then(location => {
                console.log("jjjjjj", location);
                setlocation(location);
            })
            .catch(error => {
                const { code, message } = error;
                console.warn("ggggggggggg", code, message);
            })
    }
    useEffect(() => {
        location();
    }, []);


    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };


    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#FCA351" barStyle="light-content" />
            <ImageBackground style={STYLES.background} source={require('../assets/BGImages/1.jpg')} resizeMode='stretch'>

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
                        <Text style={STYLES.bigdegree}>28{'\u02DA'} </Text>
                        <Image style={STYLES.scatterimg} source={require('../assets/openWeatherIcons/03d.png')} />
                    </View>

                    <Text style={STYLES.scatterclouds}>SCATTERED CLOUDS</Text>

                    <View style={{ ...STYLES.card, justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 40, paddingVertical: 30 }}>
                        <View style={{ ...STYLES.column1 }}>
                            <Image style={STYLES.img1} source={require('../assets/openWeatherIcons/img.png')} />
                            <Text style={STYLES.weather}>Max Temp</Text>
                            <Text style={STYLES.degree}>33{'\u2103'}</Text>
                        </View>

                        <View style={{ ...STYLES.column1 }}>
                            <Image style={STYLES.img1} source={require('../assets/openWeatherIcons/humidity.png')} />
                            <Text style={STYLES.weather}>Humidity</Text>
                            <Text style={STYLES.degree}>78%</Text>
                        </View>

                        <View style={{ ...STYLES.column1 }}>
                            <Image style={STYLES.img1} source={require('../assets/openWeatherIcons/wind.png')} />
                            <Text style={STYLES.weather}>Wind</Text>
                            <Text style={STYLES.degree}>4.4m/s</Text>
                        </View>
                    </View>

                    <View style={{ ...STYLES.card, marginTop: 10, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <View style={{ ...STYLES.column1, }}>
                            <Text style={STYLES.temparature}>28.86{'\u2103'}</Text>
                            <Text style={STYLES.scatter}>SCATTERED CLOUDS</Text>
                            <Image style={STYLES.img2} source={require('../assets/openWeatherIcons/03d.png')} />
                            <Text style={STYLES.timetext}>11:30 AM</Text>
                        </View>

                        <View style={{ ...STYLES.column1 }}>
                            <Text style={STYLES.temparature}>28.83 {'\u2103'}</Text>
                            <Text style={STYLES.scatter}>SCATTERED CLOUDS</Text>
                            <Image style={STYLES.img2} source={require('../assets/openWeatherIcons/03d.png')} />
                            <Text style={STYLES.timetext}>12:30 PM</Text>
                        </View>

                        <View style={{ ...STYLES.column1, marginRight: 2 }}>
                            <Text style={STYLES.temparature}>28.38{'\u2103'}</Text>
                            <Text style={STYLES.scatter}>SCATTERED CLOUDS</Text>
                            <Image style={STYLES.img2} source={require('../assets/openWeatherIcons/04d.png')} />
                            <Text style={STYLES.timetext}>1:30 PM</Text>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View >
    )
}

export default HomeScreen;

const STYLES = StyleSheet.create({
    card: {
        // flex: 1,
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
        alignItems: 'center'

    },
    timetext: {
        color: '#A1A1A1', fontWeight: 'bold', fontSize: 16
    },
    scatter: {
        fontSize: 10,
        width: 100,
        marginBottom: 20,
        color: '#5A5A5A'
    },
    img2: {

        height: 51,
        width: 65,
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
        height: 70, width: 90, marginTop: 80, marginLeft: -59
    },
    bigdegree: { fontSize: 130, color: 'white', marginLeft: 30 },
    daytime: { fontSize: 17, color: 'white', alignSelf: 'center', },
    galle: { color: 'white', fontSize: 25, fontWeight: "600", marginLeft: 12 },
    background: {
        width: "100%",
        height: "100%",
    },
})
