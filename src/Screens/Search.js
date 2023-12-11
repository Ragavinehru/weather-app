import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const Search = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');

    const clearSearch = () => {
        setSearchText('');
    };

    return (
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

                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24 }}>
                        <View style={STYLES.searchhome}>
                            <Image style={{ height: 20, width: 20, marginLeft: 15 }} source={require('../assets/openWeatherIcons/greypin.png')} />
                            <TextInput
                                style={{ height: 70, flex: 1, fontSize: 18, color: 'black', marginLeft: 10, }}
                                placeholder="City Name"
                                placeholderTextColor={'grey'}
                                value={searchText}
                                onChangeText={(text) => setSearchText(text)}
                            />
                            {searchText.length > 0 && (
                                <TouchableOpacity onPress={clearSearch}>
                                    <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../assets/openWeatherIcons/cross.png')} />
                                </TouchableOpacity>
                            )}
                        </View>

                        <View style={STYLES.search}>
                            <Image style={{ width: 20, height: 20, alignItems: 'center', }} source={require('../assets/openWeatherIcons/loupe.png')} />
                        </View>
                    </View>
                </ScrollView>

            </ImageBackground>
        </View>
    );
};

export default Search;

const STYLES = StyleSheet.create({
    searchhome: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'white',
        height: 70,
        flexDirection: 'row',
        marginRight: 20,
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
    appbar: { flexDirection: 'row', alignItems: 'center', marginBottom: 28, paddingTop: 50, paddingHorizontal: 16 },
    appbarimg: {
        width: 50,
        marginLeft: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appbartext: { color: 'white', fontSize: 27, fontWeight: '500', marginLeft: 17 }
});
