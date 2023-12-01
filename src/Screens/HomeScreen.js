import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions, PixelRatio } from "react-native";
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Search from './Search';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



const { width, height } = Dimensions.get("window");
// const { width } = Dimensions.get('window');
const HomeScreen = ({ navigation }) => {

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    function App({ navigation }) {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />

                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
    return (
        <View style={{ flex: 1 }} >
            <View>
                <Image style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'stretch'

                }} source={require('../assets/BGImages/1.jpg')} />


            </View>

            <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 30, marginLeft: 20 }}>
                <TouchableOpacity onPress={openDrawer}>
                    <Image style={{ height: 25, width: 20, }} source={require('../assets/openWeatherIcons/menu.png')} />
                </TouchableOpacity>
                <Image style={{ height: 20, width: 20, marginLeft: 30 }} source={require('../assets/openWeatherIcons/reload.png')} />
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 30, marginLeft: '80%' }}>
                <Image style={{ height: 20, width: 20, }} source={require('../assets/openWeatherIcons/star.png')} />
                <TouchableOpacity onPress={() => navigation.navigate('search')}>
                    <Image style={{ height: 20, width: 20, marginLeft: 30 }} source={require('../assets/openWeatherIcons/loupe.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ position: 'absolute', flexDirection: 'row', marginLeft: 100, marginTop: 45 }}>

                <Image style={{ height: 30, width: 30, marginLeft: 40 }} source={require('../assets/openWeatherIcons/pin.png')} />
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 600, marginTop: -4, marginLeft: 12 }}>GALLE</Text>

            </View>
            <Text style={{ position: 'absolute', fontSize: 17, color: 'white', alignSelf: 'center', marginTop: 77 }}>Wed 12 January 11:26 AM</Text>
            <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 70, alignSelf: 'center' }}>
                <Text style={{ fontSize: 130, color: 'white', marginLeft: 40 }}>28{'\u02DA'} </Text>
                {/* <Image style={{ height: 30, width: 30, marginTop: 50, marginLeft: -25 }} source={require('../assets/openWeatherIcons/rec.png')} /> */}
                <Image style={{ height: 55, width: 90, marginTop: 90, marginLeft: -70 }} source={require('../assets/openWeatherIcons/03d.png')} />

            </View>

            <Text style={{ color: 'white', fontSize: 28, position: 'absolute', fontWeight: 600, marginTop: 220, alignSelf: 'center' }}>SCATTERED CLOUDS</Text>
            <View style={{ ...STYLES.card, marginTop: 270 }}>

                <View style={{ ...STYLES.column1, marginRight: 20 }}>

                    <Image style={{ height: 30, width: 30 }} source={require('../assets/openWeatherIcons/img.png')} />
                    <Text style={{ marginLeft: -18 }}>Max Temp</Text>
                    <Text style={{ marginLeft: -10, color: 'black', fontSize: 16, }}>28 {'\u2103'}</Text>
                </View>

                <View style={{ ...STYLES.column1, marginRight: 20 }}>

                    <Image style={{ height: 30, width: 30 }} source={require('../assets/openWeatherIcons/humidity.png')} />
                    <Text style={{ marginLeft: -13 }}>Humidity</Text>
                    <Text style={{ marginLeft: -1, color: 'black', fontSize: 16, }}>67%</Text>
                </View>

                <View style={{ ...STYLES.column1, marginRight: 20 }}>

                    <Image style={{ height: 30, width: 30 }} source={require('../assets/openWeatherIcons/wind.png')} />
                    <Text>Wind</Text>
                    <Text style={{ marginLeft: -10, color: 'black', fontSize: 16, }}>2.51m/s</Text>
                </View>

            </View>

            {/* second */}
            <View style={{ ...STYLES.card, height: '18%', marginTop: 420 }}>
                <View style={{ ...STYLES.column1, marginRight: 20 }}>
                    <Text style={{ marginLeft: -10, color: 'black', fontSize: 16 }}>28.86{'\u2103'}</Text>
                    <Text style={{ marginLeft: -18, fontSize: 10, width: 100, marginBottom: 20 }}>SCATTERED CLOUDS</Text>
                    <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/03d.png')} />
                    <Text style={{ marginLeft: -3 }}>11:30 AM</Text>

                </View>

                <View style={{ ...STYLES.column1, marginRight: 20 }}>
                    <Text style={{ marginLeft: -10, color: 'black', fontSize: 16, }}>28.83 {'\u2103'}</Text>
                    <Text style={{ marginLeft: -22, fontSize: 10, width: 100, marginBottom: 20 }}>SCATTERED CLOUDS</Text>
                    <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/03d.png')} />
                    <Text style={{ marginLeft: -3 }}>12:30 PM</Text>

                </View>

                <View style={{ ...STYLES.column1, marginRight: 20 }}>
                    <Text style={{ marginLeft: -10, color: 'black', fontSize: 16, }}>28.38{'\u2103'}</Text>
                    <Text style={{ marginLeft: -27, fontSize: 10, width: 100, marginBottom: 20 }}>SCATTERED CLOUDS</Text>
                    <Image style={{ height: 41, width: 52, marginBottom: 7 }} source={require('../assets/openWeatherIcons/04d.png')} />
                    <Text>1:30 PM</Text>

                </View>

            </View>
        </View >
    )
}

export default HomeScreen;

const STYLES = StyleSheet.create({

    card: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: '16%',
        width: '89%',
        // margin: 320,

        elevation: 4,
        borderRadius: 35,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        position: 'absolute',
        alignSelf: 'center'
    },
    column1: {
        flex: 1,
        alignSelf: 'center', marginLeft: 50,


    }
})
