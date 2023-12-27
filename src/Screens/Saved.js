
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useLocation } from './LocationContext';



const Saved = ({route,navigation}) => {
    // const { savedLocations } = route.params;
    const { state } = useLocation();
    const savedLocations = state.savedLocations;
    return (
        
        <View style={STYLES.container}>
        <View style={STYLES.appbar}>
        <TouchableOpacity onPress={navigation.goBack} style={STYLES.appbarimg}>
            <Image style={{ height: 20, width: 20, }} source={require('../assets/openWeatherIcons/arrow.png')} />
        </TouchableOpacity>
       
        <Text style={STYLES.appbartext}>Saved Location</Text>
        </View>
        <View style={STYLES.itemContainer}>
        <FlatList
        data={savedLocations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{marginTop:10}}>

            <Text style={{fontSize:19,fontWeight:'bold',color:'white'}}>- {item.name}</Text>
            <Text style={{fontSize:16,marginTop:10,color:'white'}}>Latitude: {item.lat}</Text>
            <Text style={{fontSize:16,color:'white'}}>Longitude: {item.lon}</Text>
            <View style={STYLES.separator} />
          </View>
        )}
      />
        </View>
    </View>

    );
};


const STYLES = StyleSheet.create({
    appbar: { flexDirection: 'row',  alignItems: 'center', marginBottom: 28, paddingTop: 50, paddingHorizontal: 16 },
    appbarimg: {
      
        width: 50,
        marginLeft: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appbartext: { color: 'white', fontSize: 27, fontWeight: '500', marginLeft: 17 },
    container: {
        flex: 1,
       
        backgroundColor: '#5A5',
    },
    itemContainer: {
        // justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 30,
              
        
      },
      separator: {
        height: 1,
        width:300,
        backgroundColor: 'white', 
                marginVertical: 10,
      },
});


export default Saved;
