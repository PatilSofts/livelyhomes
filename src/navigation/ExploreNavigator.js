import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import SearchResults from '../screens/SearchResults';
import SearchResultTabNavigator from './SearchResultTabNavigator';
import DestinationSearchScreen from '../screens/DestinationSearch';

const Stack = createNativeStackNavigator();
 const Router = (prop) => {
    return (
        <Stack.Navigator>

            <Stack.Screen
            name={'Welcome'}
            component={HomeScreen}
            options={{
                headerShown: false,

            }}/>

            <Stack.Screen
            name={'SearchResults'}
            component={SearchResultTabNavigator}
          
            options={{
                title: 'Search Area ',

            }}/>

        </Stack.Navigator>
    );
 };

 export default Router;