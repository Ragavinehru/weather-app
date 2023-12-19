import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground,KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 


const Search = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [formattedDate, setFormattedDate] = useState('');
    const [formattedTime, setFormattedTime] = useState('');
    const [HourTime, setHourTime] = useState('');
    const [loading, setloading] = useState('');
    const [formattemp, setFormattedTemperature] = useState('')
    const [city, setcity] = useState('');
    const [data, setdata] = useState('');
    const [datahour, setdatahour] = useState('');
    const [hourlist, sethourlist] = useState([]);
    const [extractedData, setextractlist] = useState([]);
    const [selected, setselected] = useState([])
    const [threehours, setthree] = useState([])
    const [location, setlocation] = useState([])
    const [searchCity, setsearch] = useState('')


    const clearSearch = () => {
        setsearch('');
    };
    


    const APIHour = async () => {
        try {
            const apisearch = `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=3a9bee9c35ea0fc21779ccf795b8f5e6`;

            setloading(true);
            const response = await fetch(apisearch);
            const json = await response.json();
            setdatahour(json);
            setloading(false);

            console.log("data", json);

            if (json && json.length > 0) {
                const { lat, lon } = json[0];

                console.log("Latitude:", lat);
                console.log("Longitude:", lon);

                const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3a9bee9c35ea0fc21779ccf795b8f5e6&units=metric`;

               
                const weatherResponse = await fetch(api);
                const weatherJson = await weatherResponse.json();

                setdata(weatherJson);
                setloading(false);
                setFormattedTemperature(weatherJson.main.temp);
                console.log("tempuuuuu:", weatherJson)
                console.log("Weather data", weatherJson);
                const timezoneOffset = json?.timezone;
                const utcTime = moment.utc();
                const localTime = utcTime.utcOffset(timezoneOffset / 60);
                const formatted = localTime.format('MMMM Do YYYY, h:mm a');
                const formattedTime = localTime.format('h:mm a');
                setFormattedTime(formattedTime);
                setFormattedDate(formatted);
                console.log("temp:", formattemp);
                setloading(false);

            } else {
                console.log("No results found");
                setloading(false);
            }
        } catch (error) {
            console.error(error);
            setloading(false);
        }
    };


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
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <View style={{ flex: 1, }} >
            <ImageBackground style={{
                width: '100%',
                height: '100%',
            }} source={require('../assets/BGImages/searchCity.jpg')} resizeMode='stretch'>

                <View style={STYLES.appbar}>
                    <TouchableOpacity onPress={navigation.goBack} style={STYLES.appbarimg}>
                        <Image style={{ height: 20, width: 20, }} source={require('../assets/openWeatherIcons/arrow.png')} />
                    </TouchableOpacity>
                    <Text style={STYLES.appbartext}>Search City</Text>
                </View>

                <ScrollView style={{flex:1}}>
                    <View style={{ flexDirection: 'row',flex:1, justifyContent: 'space-between', marginHorizontal: 24 }}>
                        <View style={STYLES.searchhome}>
                            <Image style={{ height: 20, width: 20, marginLeft: 15 }} source={require('../assets/openWeatherIcons/greypin.png')} />
                            <TextInput
                                style={{ height: 70, flex: 1, fontSize: 18, color: 'black', marginLeft: 10 }}
                                placeholder="City Name"
                                placeholderTextColor={'grey'}
                                value={searchCity}
                                onChangeText={(text) => setsearch(text)}
                            />

                            {searchCity.length > 0 && (
                                <TouchableOpacity onPress={clearSearch}>
                                    <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../assets/openWeatherIcons/cross.png')} />
                                </TouchableOpacity>
                            )}
                        </View>
                        <TouchableOpacity onPress={APIHour}>
                            <View style={STYLES.search}>
                                <Image style={{ width: 20, height: 20, alignItems: 'center', }} source={require('../assets/openWeatherIcons/loupe.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
    ) : (
        searchCity && data && (
                <View style={{ ...STYLES.card,  position:'absolute', backgroundColor: '#5A5', height: '70%',marginTop:'56%' }}>
                    {/* <ImageBackground style={STYLES.background} source={require('../assets/BGImages/1.jpg')} resizeMode='stretch'> */}

                    <View style={{flex:1}}>
                        <View style={{ flexDirection: 'row', textAlign: 'center', alignSelf: 'center', marginTop: 20 }}>
                            <Image style={{ height: 30, width: 30,marginTop:50 }} source={require('../assets/openWeatherIcons/pin.png')} />
                            <Text style={STYLES.galle}>{data.name}</Text>
                        </View>
                        <Text style={STYLES.daytime}>{formattedDate}</Text>

                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                            <Text style={STYLES.bigdegree}>{formattemp}{'\u02DA'} </Text>
                            <Image style={STYLES.scatterimg} source={getWeatherIcon(data?.weather[0]?.icon)} />


                        </View>

                        {/* <Text style={STYLES.scatterclouds}>{(data?.weather[0]?.main || 'HAZE').toUpperCase()}</Text> */}
                        {/* <Text style={STYLES.scatterclouds}>HAZE</Text> */}
                      
                        <View style={{ ...STYLES.card, backgroundColor: 'white', justifyContent: 'space-between', paddingHorizontal: 40, paddingVertical: 30,marginTop:20 }}>
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
                        <View style={{ ...STYLES.card, backgroundColor: 'white', justifyContent: 'space-between', paddingHorizontal: 40, paddingVertical: 30,marginTop:20 }}>
                            <View style={{ ...STYLES.column1 }}>
                                <Image style={STYLES.img1} source={require('../assets/openWeatherIcons/img.png')} />
                                <Text style={STYLES.weather}>Temp low</Text>
                                <Text style={STYLES.degree}>{data?.main?.temp_min}</Text>
                            </View>

                            <View style={{ ...STYLES.column1 }}>
                                <Image style={STYLES.img1} source={require('../assets/openWeatherIcons/humidity.png')} />
                                <Text style={STYLES.weather}>Weather</Text>
                                <Text style={STYLES.degree}>{data?.weather[0]?.description}</Text>
                            </View>

                            <View style={{ ...STYLES.column1 }}>
                                <Image style={STYLES.img1} source={require('../assets/openWeatherIcons/wind.png')} />
                                <Text style={STYLES.weather}>Pressure</Text>
                                <Text style={STYLES.degree}>{data?.main?.pressure}</Text>
                            </View>
                        </View>

                        {/* <TouchableOpacity onPress={() => navigation.navigate('Today')}>
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
                            </TouchableOpacity> */}
                    </View>
                    {/* </ImageBackground> */}
                </View>
 )
 )}

            </ImageBackground>
        </View >
        </KeyboardAvoidingView>
);
                        };
export default Search;

const STYLES = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderRadius: 10,
        width: '89%',
        elevation: 4,
        borderRadius: 35,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.2,               
        alignSelf: 'center',
        alignItems:'center',
      
        },

    scatterclouds: {
        color: 'white',
        fontSize: 28,
        fontWeight: '800',
        textAlign: 'center',

    },
    searchhome: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'white',
        height: 70,
        flexDirection: 'row',
        marginRight: 20,
    },
    daytime: { fontSize: 17, color: 'white', alignSelf: 'center', marginTop: 10 },
  
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
    search: {
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#687ac3',
        borderRadius: 15,

        // paddingHorizontal: 20
    },
    appbar: { flexDirection: 'row',  alignItems: 'center', marginBottom: 28, paddingTop: 50, paddingHorizontal: 16 },
    appbarimg: {
      
        width: 50,
        marginLeft: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appbartext: { color: 'white', fontSize: 27, fontWeight: '500', marginLeft: 17 },
    galle: { color: 'white',marginTop:50, fontSize: 25, fontWeight: "600", marginLeft: 12 },
    scatterimg: {
        height: 80, width: 80,},
    bigdegree: { fontSize: 59, color: 'white', },
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
    column1: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img2: {
        height: 41,
        width: 55,
        marginBottom: 7
    },
    temparature: {
        color: 'black',
        fontSize: 18,
    },
});
