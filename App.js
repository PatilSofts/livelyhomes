/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import SearchResults from './src/screens/SearchResults';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import DestinationSearch from './src/screens/DestinationSearch';
import Nomembers from './src/screens/Nomembers';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './src/navigation/Router';



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      {/*<SafeAreaView>
        <HomeScreen/>
       <Post post={post1} />
       <Post post={post2} />
       <Post post={post3} />
       <Post post={post4} />
       <Post post={post5} />
       <SearchResults />       
       <DestinationSearch />       
      <Nomembers />*

        <Nomembers />
      </SafeAreaView>*/}
      <Router />
    </>
  );
};

export default App;
