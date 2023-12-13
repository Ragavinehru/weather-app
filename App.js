import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react';
import Splash from './src/Screens/Splash';
import HomeScreen from './src/Screens/HomeScreen';
import Search from './src/Screens/Search';
import CloudIcons from './src/Screens/CloudIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dailyweather from './src/Screens/Dailyweather';
import TodayWeather from './src/Screens/TodayWeather';
import CustomDrawerContent from './src/Screens/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ drawerStyle: { width: '87%' } }}

      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* <Drawer.Navigator initialRouteName="Home"> */}
      <Drawer.Screen name="Dashboard" component={HomeScreen} options={{
        headerShown: false,
        drawerIcon: () => null,

      }} />

      {/* <Drawer.Screen name="Daily" component={Dailyweather} options={{
        headerShown: false,
        drawerIcon: () => null
      }} />
      <Drawer.Screen name="Today" component={TodayWeather} options={{
        headerShown: false,
        drawerIcon: () => null
      }} /> */}
      {/* <Drawer.Screen name="Topic for Discussion" component={Topic} options={{
        headerShown: false,
        drawerIcon: () => null
      }} />
      <Drawer.Screen name="Goals" component={Goals} options={{
        headerShown: false,
        drawerIcon: () => null
      }} /> */}

    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Splash} screenOptions={{ header: () => null }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={DrawerNavigation} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="Daily" component={Dailyweather} />
        <Stack.Screen name="Today" component={TodayWeather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;