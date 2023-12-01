import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Search = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }} >
            <View>
                <Image style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'stretch'
                }} source={require('../assets/BGImages/searchCity.jpg')} />


            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 30, marginLeft: 20 }}>
                <TouchableOpacity onPress={navigation.goBack} >
                    <Image style={{ height: 20, width: 20, }} source={require('../assets/openWeatherIcons/arrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 27, fontWeight: 600, marginTop: -8, marginLeft: 17 }}>Search City</Text>
            </View>

            <View style={STYLES.searchhome}>
                <Image style={{ height: 20, width: 20, }} source={require('../assets/openWeatherIcons/greypin.png')} />
                <TextInput
                    style={{ flex: 1, fontSize: 18, color: 'grey' }} placeholder="City Name" />
                <View style={STYLES.search}>
                    <Image style={{ width: 20, height: 20, alignSelf: 'center', marginTop: 25 }} source={require('../assets/openWeatherIcons/loupe.png')} />
                </View>
            </View>



        </View>
    )
}

export default Search
const STYLES = StyleSheet.create({

    searchhome: {
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: 'white',
        marginLeft: 20,
        position: 'absolute',
        width: '65%',
        height: '9%',
        flexDirection: 'row',
        marginTop: 100
    },
    search: {
        height: '99%', width: '30%',
        position: 'absolute',
        backgroundColor: '#687ac3',
        marginLeft: 300,
        borderRadius: 15
    }

})