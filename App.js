import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react';
import Splash from './src/Screens/Splash';
import HomeScreen from './src/Screens/HomeScreen';
import Search from './src/Screens/Search';
import DrawerScreen from './src/Screens/DrawerScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dailyweather from './src/Screens/Dailyweather';
import TodayWeather from './src/Screens/TodayWeather';



const Stack = createStackNavigator();




function App() {
  return (
    <NavigationContainer>
      <DrawerScreen />
      <Stack.Navigator initialRouteName={Splash} screenOptions={{ header: () => null }}>
        <Stack.Screen name="Splash" component={Splash} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="Daily" component={Dailyweather} />
        <Stack.Screen name="Today" component={TodayWeather} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;