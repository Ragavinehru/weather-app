import { View, Text } from 'react-native'
import React from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import Search from './src/Screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';




const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="search" component={Search} />
        {/* <Stack.Screen name="Drawer" component={MyDrawer} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;