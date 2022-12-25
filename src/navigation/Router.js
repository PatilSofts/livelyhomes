import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DestinationSearch from '../screens/DestinationSearch';
import HomeTabNavigator from './HomeTabNavigator';
import Nomembers from '../screens/Nomembers';
import PostScreen from '../screens/PostScreen';


const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name={"Home"}
       component={HomeTabNavigator} 
      options={{ headerShown: false}}/>

      <Stack.Screen 
      name={"DestinationSearch"} component={DestinationSearch} 
      options={{ headerShown: false}}/>

      <Stack.Screen 
      name={"Nomembers"} component={Nomembers} 
      options={{ headerShown: false}}/>

    <Stack.Screen 
      name={"Post"} component={PostScreen} 
      options={{ headerShown: false}}/>





      
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Router;




