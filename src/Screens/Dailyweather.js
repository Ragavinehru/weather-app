import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DailyWeather = ({ navigation }) => {
    const data = [
        { id: '1', date: '12/01', text: 'Wednesday', calendar: require('../assets/openWeatherIcons/calendar.png') },
        { id: '2', rain: 'LIGHT RAIN', textt: '28 \u2103', imageSource: require('../assets/openWeatherIcons/10d.png') },
        { id: '3', min: 'Min 28 \u2103', max: 'Max 28 \u2103', imagetemp: require('../assets/openWeatherIcons/img_1.png') },

        { id: '1', date: '12/01', text: 'Thursday', calendar: require('../assets/openWeatherIcons/calendar.png') },
        { id: '2', rain: 'LIGHT RAIN', textt: '28 \u2103', imageSource: require('../assets/openWeatherIcons/10d.png') },
        { id: '3', min: 'Min 28 \u2103', max: 'Max 28 \u2103', imagetemp: require('../assets/openWeatherIcons/img_1.png') },


        { id: '1', date: '12/01', text: 'Friday', calendar: require('../assets/openWeatherIcons/calendar.png') },
        { id: '2', rain: 'OVERCAST CLOUDS', textt: '28 \u2103', imageSource: require('../assets/openWeatherIcons/10d.png') },
        { id: '3', min: 'Min 28 \u2103', max: 'Max 28 \u2103', imagetemp: require('../assets/openWeatherIcons/img_1.png') },


        { id: '1', date: '12/01', text: 'Saturday', calendar: require('../assets/openWeatherIcons/calendar.png') },
        { id: '2', rain: 'LIGHT RAIN', textt: '28 \u2103', imageSource: require('../assets/openWeatherIcons/10d.png') },
        { id: '3', min: 'Min 28 \u2103', max: 'Max 28 \u2103', imagetemp: require('../assets/openWeatherIcons/img_1.png') },



        { id: '1', date: '12/01', text: 'Sunday', calendar: require('../assets/openWeatherIcons/calendar.png') },
        { id: '2', rain: 'LIGHT RAIN', textt: '29 \u2103', imageSource: require('../assets/openWeatherIcons/10d.png') },
        { id: '3', min: 'Min 28 \u2103', max: 'Max 28 \u2103', imagetemp: require('../assets/openWeatherIcons/img_1.png') },


        { id: '1', date: '12/01', text: 'Monday', calendar: require('../assets/openWeatherIcons/calendar.png') },
        { id: '2', rain: 'LIGHT RAIN', textt: '28 \u2103', imageSource: require('../assets/openWeatherIcons/10d.png') },
        { id: '3', min: 'Min 28 \u2103', max: 'Max 28 \u2103', imagetemp: require('../assets/openWeatherIcons/img_1.png') },


        { id: '1', date: '12/01', text: 'Tuesday', calendar: require('../assets/openWeatherIcons/calendar.png') },
        { id: '2', rain: 'LIGHT RAIN', textt: '29 \u2103', imageSource: require('../assets/openWeatherIcons/10d.png') },
        { id: '3', min: 'Min 28 \u2103', max: 'Max 28 \u2103', imagetemp: require('../assets/openWeatherIcons/img_1.png') },


        { id: '1', date: '12/01', text: 'Wednesday', calendar: require('../assets/openWeatherIcons/calendar.png') },
        { id: '2', rain: 'MODERATE RAIN', textt: '28 \u2103', imageSource: require('../assets/openWeatherIcons/10d.png') },
        { id: '3', min: 'Min 28 \u2103', max: 'Max 28 \u2103', imagetemp: require('../assets/openWeatherIcons/img_1.png') },






    ];

    const renderItem = ({ item }) => (
        <View style={styles.cell}>
            <Text style={styles.text}>{item.text}</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Image style={styles.calendar} source={item.calendar} />
                <Text style={{ marginLeft: 10 }}>{item.date}</Text>
            </View>


            <View style={{ marginTop: -60, alignSelf: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>

                    <Text style={{ marginLeft: 10, color: 'black', fontSize: 15 }}>{item.textt}</Text>
                    <Image style={styles.img} source={item.imageSource} />

                </View>
                <Text>{item.rain}</Text>

            </View>


            <View style={{ marginTop: -49 }}>
                <Text style={{ marginLeft: 40, color: '#D35400' }}>{item.max}</Text>

                <View style={{ flexDirection: 'row', marginTop: 10, }}>

                    <Image style={{ ...styles.img, marginTop: -22, }} source={item.imagetemp} />
                    <Text style={{ marginLeft: 5, marginTop: -10, color: '#00AEFF' }}>{item.min}</Text>

                </View>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 20 }}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Image style={{ height: 20, width: 20, }} source={require('../assets/openWeatherIcons/back.png')} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 23, fontWeight: 400, marginTop: -8, marginLeft: 17 }}>Daily Weather Forecast</Text>
            </View>
            <View style={styles.container}>


                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={3}

                />
            </View>
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        // borderWidth: 1,
        // borderColor: 'gray',
        borderRadius: 8,
        padding: 8,
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
        width: 35,
        height: 35
    },
    text: {

        color: 'black'
    },
});

export default DailyWeather;
