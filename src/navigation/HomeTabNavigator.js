import { Text, View } from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from './ExploreNavigator';
import SearchResultsMaps from '../screens/SearchResultsMap';
import PostScreen from '../screens/PostScreen';
import DetailPost from '../components/DetailPost'

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
   <Tab.Navigator screenOptions={{
    tabBarActiveTintColor: '#C9A66B',
   }}>


    <Tab.Screen 
    name={'Explore'}
     component={ExploreNavigator}
     //component={DetailPost}
       options={{ headerShown: false,
        tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
        ),
    }}
    />

<Tab.Screen 
    name={'Saved'}
    component={HomeScreen}
    options={{ headerShown: false,
        tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
        ),
    }}
    />

<Tab.Screen 
    name={'LivelyHome'}
    component={HomeScreen}
    options={{ headerShown: false,
        tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home-search-outline" size={32} color={color} />
        ),
    }}
    />

<Tab.Screen 
    name={'Messages'}
    component={HomeScreen}
    options={{ headerShown: false,
        tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
        ),
    }}
    />

<Tab.Screen 
    name={'Profile'}
    component={HomeScreen}
    options={{ headerShown: false,
        tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={30} color={color} />
        ),
    }}
    />


   </Tab.Navigator>
  );
};

export default HomeTabNavigator;
