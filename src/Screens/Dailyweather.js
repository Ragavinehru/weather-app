import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const DailyWeather = ({ navigation }) => {
    const data = [
        {
            id: 1,
            day: "Wednesday",
            date: '12/01',
            temp: 28,
            imageSource: require('../assets/openWeatherIcons/10d.png'),
            status: 'LIGHT RAIN',
            max: 28,
            min: 25,
        },
        {
            id: 1,
            day: "Thursday",
            date: '12/01',
            temp: 28,
            imageSource: require('../assets/openWeatherIcons/10d.png'),
            status: 'LIGHT RAIN',
            max: 28,
            min: 24,
        },
        {
            id: 1,
            day: "Friday",
            date: '12/01',
            temp: 29,
            imageSource: require('../assets/openWeatherIcons/10d.png'),
            status: 'OVERCAST RAIN',
            max: 28,
            min: 25,
        },
        {
            id: 1,
            day: "Saturday",
            date: '12/01',
            temp: 29,
            imageSource: require('../assets/openWeatherIcons/10d.png'),
            status: 'LIGHT RAIN',
            max: 29,
            min: 24,
        },
        {
            id: 1,
            day: "Sunday",
            date: '12/01',
            temp: 29,
            imageSource: require('../assets/openWeatherIcons/10d.png'),
            status: 'LIGHT RAIN',
            max: 29,
            min: 23,
        },
        {
            id: 1,
            day: "Monday",
            date: '12/01',
            temp: 29,
            imageSource: require('../assets/openWeatherIcons/10d.png'),
            status: 'LIGHT RAIN',
            max: 29,
            min: 23,
        },
        {
            id: 1,
            day: "Tuesday",
            date: '12/01',
            temp: 28,
            imageSource: require('../assets/openWeatherIcons/10d.png'),
            status: 'LIGHT RAIN',
            max: 28,
            min: 23,
        },
        {
            id: 1,
            day: "Wednesday",
            date: '12/01',
            temp: 28,
            imageSource: require('../assets/openWeatherIcons/10d.png'),
            status: 'MODERATE RAIN',
            max: 28,
            min: 23,
        },

    ];

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




    const renderItem = ({ item }) => (
        <View style={styles.cell}>
            <View>
                <Text style={styles.text}>{item.day}</Text>
                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                    <Image style={styles.calendar} source={require('../assets/openWeatherIcons/calendar.png')} />
                    <Text style={{ marginLeft: 10 }}>{item.date}</Text>
                </View>
            </View>


            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: 'row', alignItems: "center", }}>
                    <Text style={{
                        color: '#5A5A5A',
                        fontWeight: '500', fontSize: 15
                    }}>{item.temp}{'\u2103'}</Text>
                    <Image style={styles.img} source={item.imageSource} />
                </View>
                <Text style={styles.status}>{item.status}</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: "center" }}>

                <Image style={{ ...styles.img, }} source={require('../assets/openWeatherIcons/img_1.png')} />
                <View style={{ marginLeft: 5 }}>
                    <Text style={{ color: '#D35400' }}>Max {item.max}{'\u2103'}</Text>
                    <Text style={{ color: '#00AEFF' }}>Min {item.min}{'\u2103'}</Text>

                </View>
            </View>
        </View>
    );

    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.appbar}>
                <TouchableOpacity onPress={navigation.goBack} style={styles.appbarimg}>
                    <Image style={{ height: 20, width: 20, }} source={require('../assets/openWeatherIcons/back.png')} />
                </TouchableOpacity>
                <Text style={styles.appbartext}>Daily Weather Forecast</Text>
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
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
        marginBottom: 8,
        borderRadius: 8,
        padding: 9,

        marginHorizontal: 45,
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
        width: 37,
        height: 37
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
