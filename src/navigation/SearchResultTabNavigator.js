
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



import SearchResultsMap from '../screens/SearchResultsMap';
import SearchResults from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();
    

const SearchResultTabNavigator = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen name={"list"} component={SearchResults} />
    <Tab.Screen name={"map"} component={SearchResultsMap} />
   </Tab.Navigator>
  );
};

export default SearchResultTabNavigator;

